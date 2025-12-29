import { motion } from "framer-motion";
import { Button } from "./ui/button";

const features = [
  {
    number: "01",
    title: "Sustainable Materials",
    description: "Ethically sourced fabrics that feel as good as they look.",
  },
  {
    number: "02",
    title: "Timeless Design",
    description: "Classic silhouettes reimagined for the modern woman.",
  },
  {
    number: "03",
    title: "Global Shipping",
    description: "Delivering elegance to doorsteps worldwide.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Redefining
              <br />
              <span className="italic">Feminine</span> Fashion
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Born from a passion for elegance and a commitment to quality, Girlee 
              represents the modern woman who values both style and substance. 
              Each piece in our collection tells a story of craftsmanship and 
              attention to detail.
            </p>
            <Button variant="elegant" size="lg">
              Learn More
            </Button>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex gap-6 p-6 rounded-sm bg-card hover:bg-secondary/50 transition-colors duration-300"
              >
                <span className="text-5xl font-display text-gold/40 font-light">
                  {feature.number}
                </span>
                <div>
                  <h3 className="font-display text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
