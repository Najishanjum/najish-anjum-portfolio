import { motion } from "framer-motion";
import { Code2, Sparkles, Trophy } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
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
              <span className="text-primary">&gt;</span> About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-50 animate-pulse" />
                <img
                  src={profileImage}
                  alt="Najish Anjum"
                  className="relative w-full h-full object-cover rounded-2xl border-2 border-primary/50 shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-primary font-semibold">B.Tech AI/ML student</span> with 
                a passion for creating innovative solutions that make a difference. My journey in tech 
                has been driven by curiosity and a desire to push boundaries.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                As a member of <span className="text-secondary font-semibold">Team ILM Tech</span>, 
                I've had the privilege of working on cutting-edge projects and winning hackathons. 
                I specialize in full-stack development and AI/ML, combining both to create 
                intelligent, user-friendly applications.
              </p>

              {/* Highlights */}
              <div className="grid gap-4 pt-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                  <Code2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-semibold text-foreground mb-1">Full Stack Developer</h3>
                    <p className="text-sm text-muted-foreground">
                      Proficient in React, Django, and modern web technologies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                  <Sparkles className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-semibold text-foreground mb-1">AI/ML Enthusiast</h3>
                    <p className="text-sm text-muted-foreground">
                      Building intelligent systems with TensorFlow and Python
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                  <Trophy className="w-6 h-6 text-neon-pink flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-semibold text-foreground mb-1">Hackathon Winner</h3>
                    <p className="text-sm text-muted-foreground">
                      Multiple victories in competitive tech challenges
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
