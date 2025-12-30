import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { Button } from "./ui/button";
import { Cart } from "./Cart";
import { SearchModal } from "./SearchModal";
import { SubscriptionModal } from "./SubscriptionModal";

const navLinks = [
	{ name: "New Arrivals", href: "#new" },
	{ name: "Collections", href: "#collections" },
	{ name: "About", href: "#about" },
	{ name: "Contact", href: "#contact" },
];

interface NavbarProps {
	isSearchOpen: boolean;
	setIsSearchOpen: (value: boolean) => void;
}

export const Navbar = ({ isSearchOpen, setIsSearchOpen }: NavbarProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);

	return (
		<>
			<header className="fixed top-10 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
				<nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-20">
					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 -ml-2"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? (
							<X className="w-5 h-5" />
						) : (
							<Menu className="w-5 h-5" />
						)}
					</button>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
							>
								{link.name}
							</a>
						))}
					</div>

					{/* Logo */}
					<a
						href="/"
						className="absolute left-1/2 -translate-x-1/2 font-display text-3xl md:text-4xl font-light tracking-wider"
					>
						Girlee
					</a>

					{/* Right Icons */}
					<div className="flex items-center gap-4">
						<button
							onClick={() => setIsSearchOpen(true)}
							className="p-2 hover:text-muted-foreground transition-colors"
							aria-label="Search"
						>
							<Search className="w-5 h-5" />
						</button>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => setIsSubscriptionOpen(true)}
							className="p-2 hover:text-muted-foreground transition-colors hidden md:block"
							aria-label="Account"
						>
							<User className="w-5 h-5" />
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => setIsCartOpen(true)}
							className="p-2 hover:text-muted-foreground transition-colors relative"
							aria-label="Shopping bag"
						>
							<ShoppingBag className="w-5 h-5" />
							<span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-gold-foreground text-[10px] flex items-center justify-center rounded-full">
								0
							</span>
						</motion.button>
					</div>
				</nav>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden bg-background border-b border-border overflow-hidden"
						>
							<div className="flex flex-col py-6 px-6 gap-4">
								{navLinks.map((link, index) => (
									<motion.a
										key={link.name}
										href={link.href}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
										className="text-lg font-display tracking-wide py-2"
										onClick={() => setIsOpen(false)}
									>
										{link.name}
									</motion.a>
								))}
								<div className="pt-4 border-t border-border mt-2">
									<Button variant="hero" size="lg" className="w-full">
										Shop Now
									</Button>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			<SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
			<Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
			<SubscriptionModal isOpen={isSubscriptionOpen} onClose={() => setIsSubscriptionOpen(false)} />
		</>
	);
};
