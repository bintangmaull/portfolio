import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function SkillBars() {
  const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {Object.entries(grouped).map(([category, categorySkills]) => (
        <div key={category}>
          <h3 className="text-sm text-[#F9FAFB] mb-6" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
            {category}
          </h3>
          <div className="space-y-5">
            {categorySkills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[#E5E7EB]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {skill.name}
                  </span>
                  <span className="text-xs text-[#6B7280]" style={{ fontFamily: 'Space Mono, monospace' }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 bg-[#1E2D45] overflow-hidden">
                  <motion.div
                    className="h-full"
                    style={{
                      background: skill.level >= 90
                        ? "linear-gradient(to right, #2563EB, #06B6D4)"
                        : "#2563EB",
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
