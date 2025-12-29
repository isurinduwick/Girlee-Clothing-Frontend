import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import collection1 from "@/assets/Frocks.jpg";
import collection2 from "@/assets/tops.jpg";
import collection3 from "@/assets/tops2.jpg";

const collections = [
  {
    id: 1,
    name: "Dresses",
    description: "Flowing silhouettes",
    image: collection1,
    count: "48 pieces",
  },
  {
    id: 2,
    name: "Outerwear",
    description: "Essential layers",
    image: collection2,
    count: "32 pieces",
  },
  {
    id: 3,
    name: "Knitwear",
    description: "Cozy luxury",
    image: collection3,
    count: "24 pieces",
  },
];

export const Collections = () => {
  return (
    <section id="collections" className="section-padding bg-gradient-cream">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Explore
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            Our Collections
          </h2>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <motion.a
              key={collection.id}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative block"
            >
              <div className="image-reveal aspect-[3/4] bg-muted rounded-sm overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>

              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-light mb-1">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {collection.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="hidden md:inline">{collection.count}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
