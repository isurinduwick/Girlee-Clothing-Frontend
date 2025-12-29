import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVideo((prev) => !prev);
    }, 5000); // Switch every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <motion.video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover object-top absolute"
          animate={{ opacity: showVideo ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <source src="https://cdn.shopify.com/videos/c/o/v/067484c7b1b04d5993a0c85ad56c22f3.mp4" type="video/mp4" />
        </motion.video>

        <motion.img
          src="//www.bostonproper.com/cdn/shop/files/click_7_desktop_2d6e4217-7062-4ab7-a03c-ec798ce8bb57_1920x.jpg?v=1766173926"
          srcSet="//www.bostonproper.com/cdn/shop/files/click_7_desktop_2d6e4217-7062-4ab7-a03c-ec798ce8bb57_1920x.jpg?v=1766173926 1x, //www.bostonproper.com/cdn/shop/files/click_7_desktop_2d6e4217-7062-4ab7-a03c-ec798ce8bb57_3840x.jpg?v=1766173926 2x"
          alt="Winter Collection"
          className="w-full h-full object-cover object-top absolute"
          animate={{ opacity: !showVideo ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pt-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Winter Collection 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-6"
          >
            Timeless
            <br />
            <span className="italic">Elegance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-md mb-8 font-light"
          >
            Discover the art of effortless sophistication. Curated pieces that define modern femininity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="xl">
              Shop Collection
            </Button>
            <Button variant="hero-outline" size="xl">
              Explore
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-foreground/30"
        />
      </motion.div>
    </section>
  );
};
