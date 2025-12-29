import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the Girlee family!", {
        description: "You'll be the first to know about new arrivals and exclusive offers.",
      });
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-gradient-blush">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Stay Connected
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
            Join the <span className="italic">Girlee</span> Circle
          </h2>
          <p className="text-muted-foreground mb-10">
            Be the first to discover new collections, exclusive offers, and styling inspiration 
            delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-background/50 border-border/50 focus:border-foreground placeholder:text-muted-foreground/60"
              required
            />
            <Button variant="hero" size="lg" type="submit">
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
