import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Grow Plus",
    description: "AI-powered agricultural solution for crop optimization and yield prediction.",
    tags: ["AI/ML", "Python", "TensorFlow", "React"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/50"
  },
  {
    title: "CareCall24on",
    description: "24/7 healthcare emergency response with AI triage and instant assistance.",
    tags: ["React", "Node.js", "Firebase", "AI"],
    color: "from-red-500/20 to-pink-500/20",
    borderColor: "border-red-500/50"
  },
  {
    title: "ShopGenie",
    description: "Smart e-commerce with AI recommendations and personalized shopping.",
    tags: ["Django", "React", "PostgreSQL", "ML"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/50"
  },
  {
    title: "Educational Performance Tracker",
    description: "Analytics platform for student performance with predictive modeling.",
    tags: ["React", "Python", "MySQL", "Data Viz"],
    color: "from-purple-500/20 to-indigo-500/20",
    borderColor: "border-purple-500/50"
  },
  {
    title: "Mental Health AI Detector",
    description: "NLP-powered mental health screening with early detection support.",
    tags: ["NLP", "TensorFlow", "React", "Express"],
    color: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/50"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
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
              <span className="text-primary">&gt;</span> Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`group p-6 rounded-lg bg-gradient-to-br ${project.color} border ${project.borderColor} backdrop-blur-sm hover:shadow-xl hover:shadow-primary/20 transition-all duration-300`}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-background/50 border border-border rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/50 hover:bg-primary/10"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-secondary/50 hover:bg-secondary/10"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
