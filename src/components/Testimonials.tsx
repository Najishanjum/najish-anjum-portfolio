import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Md Moinuddin",
    review: "Najish delivers exactly what you imagine—clean UI, fast performance, and modern designs. Truly reliable and skilled.",
  },
  {
    name: "Raj Sen",
    review: "Amazing work ethic. The website he built for me was smooth, responsive, and extremely professional.",
  },
  {
    name: "Harsh Dubey",
    review: "Great communication, great design sense, and great coding skills. Highly recommended for any digital project.",
  },
  {
    name: "Shahbaz Raza",
    review: "Smart, fast, and detail-oriented. The UI he created feels premium and user-friendly. Excellent work!",
  },
  {
    name: "Hassan",
    review: "Always on time, always professional. His development and design quality stand out every single time.",
  },
  {
    name: "Wazid",
    review: "Very skilled in frontend, backend, and automation. Delivered my project beyond expectations.",
  },
  {
    name: "Mohit Chakole",
    review: "Clean work, great structure, and a modern feel. The entire website looks polished and professional.",
  },
  {
    name: "Abhishikth",
    review: "Najish perfectly understands requirements and transforms ideas into real, working solutions. Incredible work!",
  },
  {
    name: "Saniya",
    review: "Creative, patient, and talented. His design sense and responsiveness make the whole process easy and smooth.",
  },
];

const TestimonialCard = ({ name, review }: { name: string; review: string }) => (
  <div className="flex-shrink-0 w-[320px] md:w-[380px] p-6 rounded-2xl bg-card/30 backdrop-blur-xl border border-border/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
    
    {/* Review */}
    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
      "{review}"
    </p>
    
    {/* Name */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-neon-cyan flex items-center justify-center text-background font-bold text-sm">
        {name.charAt(0)}
      </div>
      <span className="font-semibold text-foreground">{name}</span>
    </div>
  </div>
);

export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
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
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">What People Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Feedback from clients and collaborators I've had the pleasure to work with
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative"
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              name={testimonial.name}
              review={testimonial.review}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
