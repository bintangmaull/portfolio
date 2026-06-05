import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../data/portfolio";
import type { ExperienceItem } from "../data/portfolio";

export default function ExperienceSection() {
  const allCategories = Object.entries(experience);
  const [selectedItem, setSelectedItem] = useState<{ key: string; index: number } | null>(null);

  // Get all items flat for the grid
  const allItems: { item: ExperienceItem; key: string; index: number; categoryLabel: string }[] = [];
  allCategories.forEach(([key, { label, items }]) => {
    items.forEach((item, index) => {
      allItems.push({ item, key, index, categoryLabel: label });
    });
  });

  const selected = selectedItem
    ? allItems.find(i => i.key === selectedItem.key && i.index === selectedItem.index)
    : null;

  return (
    <div className="relative">
      {/* Grid of cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {allItems.map(({ item, key, index, categoryLabel }) => {
          const id = `${key}-${index}`;
          return (
            <motion.div
              key={id}
              layoutId={id}
              onClick={() => setSelectedItem({ key, index })}
              className="cursor-pointer border border-[#1E2D45] bg-[#111827]/40 p-4 hover:border-[#2563EB]/50 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.04, zIndex: 10 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#06B6D4] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="relative z-10">
                <div className="font-mono text-[9px] text-[#06B6D4] mb-1.5">{item.date}</div>
                <div className="text-sm font-semibold text-[#F9FAFB] leading-tight mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {item.title}
                </div>
                <div className="text-[10px] text-[#6B7280]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {item.company}
                </div>
                <div className="mt-2 font-mono text-[8px] text-[#2563EB]/60 uppercase tracking-wider">
                  {categoryLabel}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal overlay when clicked */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-[#0A0E1A]/80 backdrop-blur-sm z-50"
            />

            {/* Expanded card */}
            <motion.div
              layoutId={`${selected.key}-${selected.index}`}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-lg border border-[#2563EB]/40 bg-[#111827] p-8 shadow-2xl shadow-[#2563EB]/10"
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-[#6B7280] hover:text-white text-lg transition-colors"
              >
                ✕
              </button>

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"></div>

              <div className="font-mono text-[10px] text-[#06B6D4] mb-1">{selected.item.date}</div>
              <div className="font-mono text-[9px] text-[#2563EB] uppercase tracking-wider mb-2">{selected.item.role}</div>
              <h3 className="text-xl font-bold text-[#F9FAFB] mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>
                {selected.item.title}
              </h3>
              <p className="text-sm text-[#6B7280] mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {selected.item.company}
              </p>
              <div className="font-mono text-[9px] text-[#6B7280] uppercase tracking-wider mb-2">
                {selected.categoryLabel}
              </div>

              <div className="w-full h-px bg-[#1E2D45] my-4"></div>

              <ul className="space-y-3">
                {selected.item.highlights.map((h: string, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <span className="text-[#06B6D4] font-mono text-xs mt-0.5">▸</span>
                    <span className="text-sm text-[#E5E7EB] leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{h}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
