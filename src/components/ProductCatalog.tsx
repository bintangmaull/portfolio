import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { productsData } from "../data/products";
import type { ProductItem } from "../data/products";

export default function ProductCatalog() {
  const premiumProducts = productsData.filter((item) => item.tier === "premium");
  const freeProducts = productsData.filter((item) => item.tier === "free");

  const openWhatsApp = (e: React.MouseEvent, msg: string) => {
    e.stopPropagation();
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/6282135839218?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const ParallaxCard = ({ children, index }: { children: React.ReactNode, index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
    
    // Add subtle parallax based on column index
    const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -40 : -80]);

    return (
      <motion.div ref={ref} style={{ y }} className="h-full">
        {children}
      </motion.div>
    );
  };

  const renderProductCard = (item: ProductItem, index: number, isPremium: boolean) => (
    <ParallaxCard key={item.id} index={index}>
      <motion.a
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      key={item.id}
      href={`/product/${item.id}`}
      className="block no-underline h-full product-card-link"
    >
      <div
        className={`product-card group cursor-pointer border p-6 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 rounded-xl ${isPremium
            ? "border-[#E4E4E7] dark:border-white/10 dark:bg-[#18181B] bg-white hover:border-[#2563EB]/50 hover:shadow-lg dark:hover:shadow-blue-500/5 shadow-sm"
            : "border-[#E4E4E7] dark:border-white/10 dark:bg-[#18181B] bg-white hover:border-[#A1A1AA]/50 hover:shadow-lg dark:hover:shadow-gray-500/5 shadow-sm"
          }`}
      >

        <div>
          {/* Tier & Badge */}
          <div className="flex justify-between items-center gap-2 mb-4">
            <span className="font-mono text-[10px] text-[#06B6D4] tracking-widest uppercase font-semibold">
              {item.category}
            </span>
            <span
              className={`font-mono text-[10px] px-2.5 py-0.5 border font-semibold rounded-sm ${isPremium
                  ? "border-[#2563EB]/30 text-[#2563EB] bg-[#2563EB]/10 dark:text-[#60A5FA] dark:bg-[#2563EB]/20"
                  : "border-gray-500/30 text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-800"
                }`}
            >
              {item.badge}
            </span>
          </div>

          {/* Title & Tagline */}
          <h3 className="font-display font-semibold text-xl dark:text-[#FAFAFA] text-[#09090B] group-hover:text-[#2563EB] transition-colors mb-2 leading-tight">
            {item.title}
          </h3>
          <p className="font-body text-sm dark:text-[#A1A1AA] text-[#3F3F46] mb-4 leading-relaxed line-clamp-2">
            {item.tagline}
          </p>
        </div>

        <div>
          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] dark:bg-black/40 bg-[#F4F4F5] dark:text-[#D4D4D8] text-[#3F3F46] px-2 py-0.5 border dark:border-white/5 border-black/5 rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between border-t dark:border-white/10 border-black/10 pt-4">
            <span className="font-mono text-xs dark:text-[#D4D4D8] text-[#3F3F46] group-hover:text-[#2563EB] transition-colors font-medium">
              Baca Dokumentasi →
            </span>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (item.downloadUrl) {
                  window.open(item.downloadUrl, "_blank", "noopener,noreferrer");
                } else {
                  openWhatsApp(e, item.whatsappMessage);
                }
              }}
              className={`font-mono text-xs px-4 py-2 transition-all font-semibold rounded-md ${isPremium
                  ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
                  : "dark:bg-white dark:text-black dark:hover:bg-gray-200 bg-black text-white hover:bg-gray-800"
                }`}
            >
              {isPremium ? "INQUIRE / KONSULTASI" : "UNDUH GRATIS →"}
            </button>
          </div>
        </div>
      </div>
      </motion.a>
    </ParallaxCard>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="w-full space-y-16">
      {/* SECTION 1: PREMIUM PRODUCTS & SERVICES */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b dark:border-white/10 border-black/10 pb-4 mb-8">
          <div>
            <span className="font-mono text-xs text-[#2563EB] uppercase tracking-widest block mb-1 font-semibold">
              TIER 1 · ENTERPRISE & PROFESSIONAL
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl dark:text-[#FAFAFA] text-[#09090B]">
              Premium Products & Services
            </h2>
          </div>
          <span className="font-mono text-xs dark:text-[#A1A1AA] text-[#3F3F46] border dark:border-white/10 border-black/10 px-3 py-1 self-start sm:self-auto rounded-sm">
            {premiumProducts.length} SOLUTIONS
          </span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {premiumProducts.map((item, idx) => renderProductCard(item, idx, true))}
        </motion.div>
      </div>

      {/* SECTION 2: FREE TOOLS & APPLICATIONS */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b dark:border-white/10 border-black/10 pb-4 mb-8">
          <div>
            <span className="font-mono text-xs dark:text-[#A1A1AA] text-[#3F3F46] uppercase tracking-widest block mb-1 font-semibold">
              TIER 2 · OPEN ACCESS & PORTABLE
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl dark:text-[#FAFAFA] text-[#09090B]">
              Free Tools & Applications
            </h2>
          </div>
          <span className="font-mono text-xs dark:text-[#A1A1AA] text-[#3F3F46] border dark:border-white/10 border-black/10 px-3 py-1 self-start sm:self-auto rounded-sm">
            {freeProducts.length} FREE TOOLS
          </span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {freeProducts.map((item, idx) => renderProductCard(item, idx, false))}
        </motion.div>
      </div>
    </div>
  );
}
