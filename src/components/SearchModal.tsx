import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { useState } from "react";

interface SearchModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const quickSearchItems = ["Women", "Men", "Best seller"];

const popularProducts = [
	{
		id: 1,
		name: "Casual Wear Linen S/S Shirt",
		image: "src/Assets/girleesrch1.jpg",
		price: "Rs 3,450.00",
	},
	{
		id: 2,
		name: "Casual Wear Oxford L/S Shirt",
		image: "src/Assets/search2.jpg",
		price: "Rs 3,850.00",
	},
	{
		id: 3,
		name: "Halter maxi dress",
		image: "src/Assets/search3.jpg",
		price: "Rs 9,250.00",
	},
	{
		id: 4,
		name: "Sleeveless midi dress with tiered panel",
		image: "src/Assets/search4.jpg",
		price: "Rs 8,950.00",
	},
	{
		id: 5,
		name: "Basic shirt with three quarter sleeves",
		image: "src/Assets/search5.jpg",
		price: "Rs 4,250.00",
	},
	{
		id: 6,
		name: "Oversized blouse",
		image: "src/Assets/search6.jpg",
		price: "Rs 4,650.00",
	},
];

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
					/>

					{/* Modal */}
					<motion.div
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -100 }}
						transition={{ type: "spring", damping: 25, stiffness: 300 }}
						className="fixed top-0 left-0 right-0 z-[60] bg-background max-h-[90vh] overflow-y-auto"
					>
						<div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
							{/* Close Button */}
							<button
								onClick={onClose}
								className="absolute top-6 right-6 p-2 hover:bg-accent rounded-full transition-colors"
								aria-label="Close search"
							>
								<X className="w-6 h-6" />
							</button>

							{/* Title */}
							<h2 className="text-4xl md:text-5xl font-display font-light text-center mb-12">
								What are you looking for?
							</h2>

							{/* Search Input */}
							<div className="max-w-3xl mx-auto mb-8">
								<div className="relative">
									<input
										type="text"
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										placeholder="I'm looking for..."
										className="w-full px-6 py-4 pr-12 text-lg border-2 border-border rounded-full focus:outline-none focus:border-foreground transition-colors bg-background"
									/>
									<button
										className="absolute right-4 top-1/2 -translate-y-1/2 p-2"
										aria-label="Search"
									>
										<Search className="w-5 h-5 text-muted-foreground" />
									</button>
								</div>

								{/* Quick Search */}
								<div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
									<span className="text-sm text-muted-foreground">
										Quick Search:
									</span>
									{quickSearchItems.map((item) => (
										<button
											key={item}
											onClick={() => setSearchQuery(item)}
											className="text-sm text-foreground hover:underline"
										>
											{item}
										</button>
									))}
								</div>
							</div>

							{/* Popular Products */}
							<div className="mt-16">
								<h3 className="text-2xl font-display font-light mb-8">
									Popular product
								</h3>
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
									{popularProducts.map((product) => (
										<motion.div
											key={product.id}
											whileHover={{ y: -5 }}
											className="group cursor-pointer"
										>
											<div className="aspect-[3/4] bg-accent rounded-lg overflow-hidden mb-3">
												<img
													src={product.image}
													alt={product.name}
													className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
												/>
											</div>
											<h4 className="text-sm font-light mb-1 line-clamp-2">
												{product.name}
											</h4>
											<p className="text-sm font-medium">{product.price}</p>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};
