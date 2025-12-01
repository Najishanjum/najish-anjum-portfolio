import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import notFoundIllustration from "@/assets/404-illustration.png";
import logoNA from "@/assets/logo-na.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.div 
        className="text-center max-w-2xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main Illustration Container */}
        <div className="relative mb-8 inline-block">
          <motion.img
            src={notFoundIllustration}
            alt="404 Not Found"
            className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          {/* Personal Logo Overlay - Bottom Right */}
          <motion.img
            src={logoNA}
            alt="NA Logo"
            className="absolute bottom-4 right-4 w-16 h-16 rounded-full shadow-md"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          />
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="mb-2 text-6xl font-bold bg-gradient-to-r from-primary via-neon-cyan to-neon-purple bg-clip-text text-transparent">
            404
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Oops! This page doesn't exist
          </p>
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium"
          >
            Return to Home
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
