import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logoNA from "@/assets/logo-na.png";

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds for 2x speed
    const interval = 20;
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 800);
      }, 300);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)"
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background glow effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(var(--neon-blue) / 0.15) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(var(--neon-purple) / 0.2) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Logo in circular border */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-12"
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-[-8px] rounded-full"
              style={{
                background: "linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-blue)), hsl(var(--neon-purple)))",
                filter: "blur(12px)",
              }}
              animate={{
                opacity: progress >= 100 ? [0.8, 1, 0.8] : [0.4, 0.7, 0.4],
                scale: progress >= 100 ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Circular border */}
            <div
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1"
              style={{
                background: "linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-blue)), hsl(var(--neon-purple)))",
              }}
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img
                  src={logoNA}
                  alt="NA Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Expanding glow on complete */}
            {progress >= 100 && (
              <motion.div
                className="absolute inset-[-20px] rounded-full"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--neon-cyan) / 0.5), hsl(var(--neon-blue) / 0.5), hsl(var(--neon-purple) / 0.5))",
                  filter: "blur(30px)",
                }}
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 2, opacity: [0, 0.8, 0] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            )}
          </motion.div>

          {/* Loading bar container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative w-64 md:w-80"
          >
            {/* Loading bar background */}
            <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
              {/* Animated progress bar */}
              <motion.div
                className="h-full rounded-full relative"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--neon-cyan)), hsl(var(--neon-blue)), hsl(var(--neon-purple)), hsl(var(--neon-cyan)))",
                  backgroundSize: "300% 100%",
                  width: `${progress}%`,
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Glow effect on progress bar */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: "0 0 20px hsl(var(--neon-blue) / 0.8), 0 0 40px hsl(var(--neon-purple) / 0.5)",
                  }}
                />
              </motion.div>
            </div>

            {/* Progress percentage */}
            <motion.p
              className="text-center mt-4 font-mono text-sm text-muted-foreground"
              style={{
                textShadow: "0 0 10px hsl(var(--neon-blue) / 0.5)",
              }}
            >
              <span className="text-primary">{Math.round(progress)}%</span>
              <span className="ml-2 opacity-60">loading...</span>
            </motion.p>
          </motion.div>

          {/* Motion blur lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, hsl(var(--neon-${i % 2 === 0 ? 'blue' : 'cyan'}) / 0.3), transparent)`,
                  top: `${20 + i * 15}%`,
                  left: 0,
                  right: 0,
                }}
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
