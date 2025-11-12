import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Redux", "Next.js"],
    color: "from-neon-cyan to-neon-blue"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Django", "Python"],
    color: "from-neon-blue to-neon-purple"
  },
  {
    title: "Databases",
    skills: ["MySQL", "Firebase", "MongoDB", "PostgreSQL"],
    color: "from-neon-purple to-neon-pink"
  },
  {
    title: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    color: "from-neon-pink to-neon-cyan"
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Linux", "C++", "Java"],
    color: "from-neon-cyan to-neon-purple"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold font-mono">
              <span className="text-primary">&gt;</span> Skills & Technologies
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group"
              >
                <h3 className={`text-xl font-bold font-mono mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-sm font-mono bg-muted/50 border border-border rounded-md hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fun Stat */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
          >
            <p className="text-lg font-mono text-muted-foreground">
              <span className="text-primary font-bold text-2xl">25+</span> Technologies & 
              <span className="text-secondary font-bold text-2xl ml-2">100+</span> Hours of Coding
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
