import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "New Arrivals", href: "#" },
    { name: "Dresses", href: "#" },
    { name: "Outerwear", href: "#" },
    { name: "Knitwear", href: "#" },
    { name: "Sale", href: "#" },
  ],
  help: [
    { name: "Customer Service", href: "#" },
    { name: "Shipping & Returns", href: "#" },
    { name: "Size Guide", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Track Order", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-display text-3xl font-light tracking-wider">
              Girlee
            </a>
            <p className="mt-4 text-sm text-primary-foreground/60 max-w-xs">
              Timeless elegance for the modern woman. Discover your style with Girlee.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-foreground/20 hover:border-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Girlee. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/40">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
