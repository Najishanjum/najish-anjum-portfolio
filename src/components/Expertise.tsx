import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Palette, Bot } from "lucide-react";

const expertiseData = [
  {
    icon: Code,
    title: "Frontend & Backend Development",
    description: "Building fast, responsive, and scalable web applications with modern frontend and backend technologies.",
    gradient: "from-neon-blue to-neon-cyan",
  },
  {
    icon: Palette,
    title: "UI/UX & Visual Design",
    description: "Creating modern, user-friendly designs with clean layouts, smooth interactions, and aesthetic UI.",
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    icon: Bot,
    title: "AI-Based Tools & Automation",
    description: "Integrating intelligent features like chatbots, analytics, recommendation engines, and workflow automation.",
    gradient: "from-neon-cyan to-neon-green",
  },
];

const ExpertiseCard = ({ 
  item, 
  index 
}: { 
  item: typeof expertiseData[0]; 
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="group relative"
    >
      {/* Glassmorphism Card */}
      <div className="relative p-8 rounded-2xl bg-card/30 backdrop-blur-xl border border-border/30 overflow-hidden transition-all duration-500 hover:bg-card/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02]">
        {/* Background Glow */}
        <motion.div
          className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
        />
        
        {/* Icon Container */}
        <motion.div
          className={`relative mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} p-[1px] transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
          style={{
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.1)"
          }}
          whileHover={{ 
            boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
          }}
        >
          <div className="w-full h-full rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <item.icon className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-neon-cyan" />
          </div>
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        {/* Animated Line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.gradient} rounded-full`}
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export const Expertise = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="expertise" 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            What We Do
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Our Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Delivering exceptional digital solutions through cutting-edge technology and creative innovation
          </p>
        </motion.div>

        {/* Expertise Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {expertiseData.map((item, index) => (
            <ExpertiseCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
