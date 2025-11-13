import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, Terminal } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.", {
      description: "Thank you for reaching out!"
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
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
              <span className="text-primary">&gt;</span> Get In Touch
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Terminal-style Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border border-border/50 rounded-lg overflow-hidden bg-card/30 backdrop-blur-sm"
          >
            {/* Terminal Header */}
            <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 ml-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono text-muted-foreground">contact.sh</span>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-primary flex items-center gap-2">
                    <span className="text-muted-foreground">$</span> name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Enter your name"
                    className="bg-background/50 border-border/50 focus:border-primary font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono text-primary flex items-center gap-2">
                    <span className="text-muted-foreground">$</span> email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono text-primary flex items-center gap-2">
                    <span className="text-muted-foreground">$</span> message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Your message here..."
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary font-mono resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full border-glow bg-primary/10 hover:bg-primary/20 text-primary font-mono group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  send_message()
                </Button>
              </form>

              {/* Terminal Output */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-6 pt-6 border-t border-border/50"
              >
                <p className="text-sm font-mono text-muted-foreground">
                  <span className="text-primary">najish@portfolio</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-neon-blue">~</span>
                  <span className="text-muted-foreground">$</span>
                  <span className="ml-2">Awaiting your message...</span>
                  <span className="animate-pulse">|</span>
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Alternative Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <p className="text-muted-foreground font-mono">
              Or reach out directly at{" "}
              <a href="mailto:najishanjum058@gmail.com" className="text-primary hover:underline">
                najishanjum058@gmail.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
