import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

interface CartProps {
	isOpen: boolean;
	onClose: () => void;
}

export const Cart = ({ isOpen, onClose }: CartProps) => {
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
						className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[110]"
					/>

					{/* Cart Drawer */}
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", damping: 30, stiffness: 300 }}
						className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-white z-[120] shadow-2xl"
					>
						<div className="flex flex-col h-full">
							{/* Header */}
							<div className="flex items-center justify-between p-6 border-b border-gray-200">
								<h2 className="text-xl font-semibold tracking-wide text-black">CART</h2>
								<button
									onClick={onClose}
									className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
									aria-label="Close cart"
								>
									<X className="w-5 h-5 text-black" strokeWidth={2} />
								</button>
							</div>

							{/* Cart Content */}
							<div className="flex-1 flex flex-col items-center justify-center p-8">
								{/* Empty Cart Icon */}
								<div className="relative mb-6">
									<div className="w-32 h-32 flex items-center justify-center">
										<ShoppingCart className="w-24 h-24 text-gray-400" strokeWidth={1.5} />
										<div className="absolute top-2 right-2 w-10 h-10 bg-white border-2 border-gray-400 rounded-full flex items-center justify-center">
											<X className="w-5 h-5 text-gray-400" strokeWidth={2} />
										</div>
									</div>
								</div>

								{/* Empty Cart Message */}
								<p className="text-base text-gray-600 mb-8 font-normal tracking-wide text-center">
									Your cart is currently empty.
								</p>

								{/* Start Shopping Button */}
								<Button
									onClick={onClose}
									className="bg-black text-white hover:bg-gray-900 px-10 py-6 text-xs tracking-[0.2em] rounded-none font-semibold uppercase transition-colors"
								>
									START SHOPPING
								</Button>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};
