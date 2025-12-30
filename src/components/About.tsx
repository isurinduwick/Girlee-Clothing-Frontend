import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Designed and Made
            <br />
            <span className="italic text-gold">in Sri Lanka</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Girlee is a women's fashion brand that creates elegant, quality clothing
            through local craftsmanship. Every piece is designed and produced in Sri Lanka
            by skilled tailors, designers, and production workers in our community.
          </p>
        </motion.div>

        {/* Main Story Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* What We Do - with Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="aspect-[4/3] bg-secondary/30 rounded-sm overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                {/* Image: Design studio or clothing designs */}
                <span className="text-sm tracking-wider">DESIGN STUDIO</span>
              </div>
            </div>
            <div>
              <h3 className="font-display text-3xl mb-4 font-light">What We Do</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                We design and produce contemporary women's clothing that combines modern
                style with traditional craftsmanship. From initial sketches to final stitching,
                our entire production process happens locally in Sri Lanka, ensuring quality
                control and supporting our community.
              </p>
            </div>
          </motion.div>

          {/* Local Production - with Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="aspect-[4/3] bg-secondary/30 rounded-sm overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                {/* Image: Tailors at work */}
                <span className="text-sm tracking-wider">LOCAL TAILORS</span>
              </div>
            </div>
            <div>
              <h3 className="font-display text-3xl mb-4 font-light">Local Production</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Our team consists of experienced local tailors, pattern makers, and designers
                who bring years of expertise to every garment. By keeping production in-house,
                we maintain high standards while providing stable employment opportunities
                to skilled workers in our region.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Community Impact - Full Width Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card border border-gold/20 rounded-sm overflow-hidden"
        >
          <div className="grid lg:grid-cols-5 gap-0">
            <div className="lg:col-span-2 aspect-[4/5] lg:aspect-auto bg-secondary/30">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                {/* Image: Production facility or team photo */}
                <span className="text-sm tracking-wider">OUR TEAM</span>
              </div>
            </div>
            <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="font-display text-3xl md:text-4xl mb-6 font-light">
                Community Impact
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base mb-8">
                Beyond creating beautiful clothing, we are committed to supporting local
                livelihoods. Our production facility provides fair wages and professional
                development opportunities to Sri Lankan tailors, designers, and production
                staff. When you choose Girlee, you support skilled craftspeople and contribute
                to the growth of Sri Lanka's fashion industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="elegant" size="lg">
                  View Our Collection
                </Button>
                <Button variant="outline" size="lg" className="border-gold/50 hover:bg-gold/10">
                  Our Craftspeople
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gold/20"
        >
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl text-gold mb-2">100%</p>
            <p className="text-sm text-muted-foreground tracking-wide">Local Production</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl text-gold mb-2">50+</p>
            <p className="text-sm text-muted-foreground tracking-wide">Skilled Workers</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl text-gold mb-2">15+</p>
            <p className="text-sm text-muted-foreground tracking-wide">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl text-gold mb-2">Sri Lanka</p>
            <p className="text-sm text-muted-foreground tracking-wide">Made With Pride</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
