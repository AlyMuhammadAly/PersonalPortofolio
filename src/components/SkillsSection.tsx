import { useState } from "react";
import { cn } from "../lib/utils";
import StarBackground from "./StarBackground";

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    { name: "MongoDB", level: 10, category: "Backend" },
    { name: "PHP", level: 20, category: "Backend" },
    { name: "CouchDB", level: 30, category: "Backend" },
    { name: "Python", level: 40, category: "Backend" },
    { name: "React", level: 50, category: "Backend" },
    { name: "TypeScript", level: 60, category: "Backend" },
    { name: "JavaScript", level: 70, category: "Backend" },
    { name: "C++", level: 80, category: "Backend" },
    { name: "", level: 90, category: "Backend" },
    { name: "", level: 90, category: "Backend" },
  ];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  const categories = ["All", "Backend", "Frontend", "DevOps"];

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <StarBackground />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((categroy, key) => (
            <button
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === categroy
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
              key={key}
              onClick={() => setActiveCategory(categroy)}
            >
              {categroy}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
