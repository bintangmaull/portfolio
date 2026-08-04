import React, { useState } from "react";
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

  const renderProductCard = (item: ProductItem, index: number, isPremium: boolean) => (
    <a
      key={item.id}
      href={`/product/${item.id}`}
      className="block no-underline h-full product-card-link"
    >
      <div
        className={`product-card group cursor-pointer border p-7 flex flex-col justify-between h-full relative overflow-hidden ${isPremium
            ? "border-[#1E2D45] dark:bg-[#111827]/60 bg-white/90 hover:border-[#2563EB] hover:shadow-[0_10px_35px_rgba(37,99,235,0.15)]"
            : "border-[#06B6D4]/40 dark:bg-[#0A1628]/60 bg-cyan-50/50 hover:border-[#06B6D4] hover:shadow-[0_10px_35px_rgba(6,182,212,0.15)]"
          }`}
      >
        {/* Top Animated Border Accent */}
        <div
          className={`absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${isPremium
              ? "bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-transparent"
              : "bg-gradient-to-r from-[#06B6D4] via-[#10B981] to-transparent"
            }`}
        />

        <div>
          {/* Tier & Badge */}
          <div className="flex justify-between items-center gap-2 mb-4">
            <span className="font-mono text-[10px] text-[#06B6D4] tracking-widest uppercase font-semibold">
              {item.category}
            </span>
            <span
              className={`font-mono text-[10px] px-2.5 py-0.5 border font-bold ${isPremium
                  ? "border-[#2563EB]/60 text-white bg-[#2563EB]"
                  : "border-[#10B981]/60 text-emerald-300 bg-emerald-900/60"
                }`}
            >
              {item.badge}
            </span>
          </div>

          {/* Title & Tagline */}
          <h3 className="font-display font-bold text-2xl dark:text-white text-gray-900 group-hover:text-[#06B6D4] transition-colors mb-2 leading-tight">
            {item.title}
          </h3>
          <p className="font-body text-xs font-semibold text-[#06B6D4] mb-3">
            {item.tagline}
          </p>
          <p className="font-body text-sm dark:text-gray-300 text-gray-700 mb-6 leading-relaxed">
            {item.description}
          </p>

          {/* Quick Highlights / Features preview */}
          <ul className="space-y-2 mb-6">
            {item.features.slice(0, 2).map((feat, i) => (
              <li key={i} className="flex gap-2.5 items-start font-body text-xs dark:text-gray-300 text-gray-700">
                <span className="text-[#06B6D4] font-mono mt-0.5">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] dark:bg-[#1E2D45]/50 bg-gray-100 dark:text-gray-300 text-gray-800 px-2.5 py-1 border border-[#1E2D45]/40"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action button row */}
          <div className="flex items-center justify-between border-t border-[#1E2D45]/60 pt-4">
            <span className="font-mono text-xs text-[#06B6D4] group-hover:underline font-semibold">
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
              className={`font-mono text-xs px-4 py-2 transition-colors font-semibold shadow-md ${isPremium
                  ? "bg-[#2563EB] hover:bg-[#06B6D4] text-white shadow-[#2563EB]/25"
                  : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/25"
                }`}
            >
              {isPremium ? "INQUIRE / KONSULTASI" : "UNDUH GRATIS →"}
            </button>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="w-full space-y-16">
      {/* SECTION 1: PREMIUM PRODUCTS & SERVICES */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1E2D45] pb-4 mb-8">
          <div>
            <span className="font-mono text-xs text-brand-blue uppercase tracking-widest block mb-1">
              TIER 1 · ENTERPRISE & PROFESSIONAL
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl dark:text-white text-gray-900">
              Premium Products & Services
            </h2>
          </div>
          <span className="font-mono text-xs text-[#06B6D4] border border-[#1E2D45] px-3 py-1 self-start sm:self-auto">
            {premiumProducts.length} SOLUTIONS
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {premiumProducts.map((item, idx) => renderProductCard(item, idx, true))}
        </div>
      </div>

      {/* SECTION 2: FREE TOOLS & APPLICATIONS */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1E2D45] pb-4 mb-8">
          <div>
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block mb-1">
              TIER 2 · OPEN ACCESS & PORTABLE
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl dark:text-white text-gray-900">
              Free Tools & Applications
            </h2>
          </div>
          <span className="font-mono text-xs text-emerald-400 border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 self-start sm:self-auto">
            {freeProducts.length} FREE TOOL
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {freeProducts.map((item, idx) => renderProductCard(item, idx, false))}
        </div>
      </div>
    </div>
  );
}
