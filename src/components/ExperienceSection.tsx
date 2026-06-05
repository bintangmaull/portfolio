import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../data/portfolio";
import type { ExperienceItem } from "../data/portfolio";

export default function ExperienceSection() {
  const tabs = Object.entries(experience);
  const [activeTab, setActiveTab] = useState(tabs[0][0]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const activeItems = experience[activeTab]?.items || [];

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      {/* Tab Filter */}
      <div className="flex gap-2 flex-wrap mb-10">
        {tabs.map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => { setActiveTab(key); setExpandedId(null); }}
            className={`font-mono text-xs px-4 py-2 border transition-all duration-200 ${
              activeTab === key
                ? "bg-[#2563EB] text-white border-[#2563EB]"
                : "border-[#1E2D45] text-[#6B7280] hover:border-[#2563EB] hover:text-[#2563EB]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Experience List — compact, expandable */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-2"
        >
          {activeItems.map((item: ExperienceItem, index: number) => {
            const id = `${activeTab}-${index}`;
            const isOpen = expandedId === id;

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                {/* Collapsed row — clickable */}
                <button
                  onClick={() => toggle(id)}
                  className={`w-full text-left px-5 py-4 border transition-all duration-300 flex items-center gap-6 group ${
                    isOpen 
                      ? "border-[#2563EB]/40 bg-[#111827]/80" 
                      : "border-[#1E2D45] hover:border-[#2563EB]/30 bg-transparent"
                  }`}
                >
                  {/* Date */}
                  <span className="font-mono text-[10px] text-[#06B6D4] w-24 shrink-0">
                    {item.date}
                  </span>

                  {/* Role + Title + Company */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-[#2563EB] uppercase tracking-wider">
                        {item.role}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm font-semibold text-[#F9FAFB] truncate" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {item.title}
                      </span>
                      <span className="text-[10px] text-[#6B7280]">·</span>
                      <span className="text-xs text-[#6B7280] truncate" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {item.company}
                      </span>
                    </div>
                  </div>

                  {/* Expand icon */}
                  <span className={`text-[#6B7280] text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>

                {/* Expanded details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-4 border-x border-b border-[#1E2D45] bg-[#111827]/50">
                        <ul className="space-y-2">
                          {item.highlights.map((h: string, i: number) => (
                            <li key={i} className="flex gap-3 items-start">
                              <span className="text-[#06B6D4] mt-0.5 font-mono text-xs">▸</span>
                              <span className="text-sm text-[#E5E7EB] leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                {h}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
