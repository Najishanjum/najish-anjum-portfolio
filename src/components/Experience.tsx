import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";

import ilmTechLogo from "@/assets/ilm-tech-logo.jpg";
import ajinavaEdgeLogo from "@/assets/ajinava-edge-logo.jpg";
import paranoxLogo from "@/assets/paranox-logo.png";
import techfestLogo from "@/assets/techfest-logo.png";
import gssocLogo from "@/assets/gssoc-logo.png";
import moodIndigoLogo from "@/assets/mood-indigo-logo.png";
import osciLogo from "@/assets/osci-logo.png";

const experiences = [
  {
    title: "Team Lead",
    company: "Team ILM Tech",
    type: "Full-time",
    duration: "Sep 2025 – Present",
    length: "3 mos",
    location: "Jabalpur, Madhya Pradesh, India",
    description: "",
    skills: [],
    logo: ilmTechLogo,
  },
  {
    title: "Campus Ambassador – Paranox 2.0 Hackathon 2025",
    company: "TechX Ninjas",
    type: "Part-time",
    duration: "Sep 2025 – Present",
    length: "3 mos",
    location: "",
    description: "Representing ParanoX 2.0 Hackathon, promoting registrations, engaging students, and fostering innovation while enhancing leadership.",
    skills: [],
    logo: paranoxLogo,
  },
  {
    title: "Co-Founder",
    company: "Ajinava Edge",
    type: "Full-time",
    duration: "Sep 2025 – Present",
    length: "",
    location: "India",
    description: "",
    skills: [],
    logo: ajinavaEdgeLogo,
  },
  {
    title: "College Ambassador",
    company: "Techfest, IIT Bombay",
    type: "Part-time · Remote",
    duration: "Aug 2025 – Oct 2025",
    length: "3 mos",
    location: "Jabalpur, Madhya Pradesh, India",
    description: "College Ambassador for Asia's largest science & technology festival.",
    skills: ["Leadership", "Event Management"],
    logo: techfestLogo,
  },
  {
    title: "Open-Source Contributor",
    company: "GirlScript Summer of Code 2025 (GSSoC)",
    type: "",
    duration: "Jul 2025 – Sep 2025",
    length: "3 mos",
    location: "",
    description: "Worked on open-source projects, collaborating with mentors, fixing bugs, adding features, improving documentation, Git & GitHub proficiency.",
    skills: [],
    logo: gssocLogo,
  },
  {
    title: "Indigo Squad Member",
    company: "Mood Indigo IIT Bombay",
    type: "Internship · Remote",
    duration: "Jul 2025 – Aug 2025",
    length: "2 mos",
    location: "",
    description: "",
    skills: ["Leadership", "Social Media Marketing"],
    logo: moodIndigoLogo,
  },
  {
    title: "Contributor 2025",
    company: "Open Source Connect",
    type: "Full-time",
    duration: "Jul 2025 – Aug 2025",
    length: "2 mos",
    location: "Jabalpur, Madhya Pradesh, India · Remote",
    description: "",
    skills: ["Open Source", "UI/UX Enhancement", "+2 skills"],
    logo: osciLogo,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            <span className="text-gradient">Experience</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground font-mono">My professional journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-cyan-400/30 to-transparent" />

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20 md:pl-28"
              >
                {/* Timeline Dot with Logo */}
                <div className="absolute left-4 md:left-8 w-8 h-8 md:w-10 md:h-10 rounded-full bg-card border-2 border-primary/30 overflow-hidden flex items-center justify-center shadow-lg shadow-primary/10">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-5 md:p-6 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {exp.company}
                        {exp.type && (
                          <span className="text-muted-foreground text-sm ml-2">
                            · {exp.type}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                      {exp.length && (
                        <span className="text-xs">({exp.length})</span>
                      )}
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>
                  )}

                  {/* Skills */}
                  {exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border/30">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
