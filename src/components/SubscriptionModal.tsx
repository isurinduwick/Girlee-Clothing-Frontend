import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";
import { useState } from "react";

interface SubscriptionModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const countryCodes = [
	{ code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
	{ code: "+1", flag: "🇺🇸", name: "USA" },
	{ code: "+44", flag: "🇬🇧", name: "UK" },
	{ code: "+91", flag: "🇮🇳", name: "India" },
	{ code: "+61", flag: "🇦🇺", name: "Australia" },
];

export const SubscriptionModal = ({ isOpen, onClose }: SubscriptionModalProps) => {
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [countryCode, setCountryCode] = useState("+94");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log({ email, phone: `${countryCode}${phone}` });
		setEmail("");
		setPhone("");
		onClose();
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
						onClick={onClose}
					/>
					
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
						<motion.div
							initial={{ opacity: 0, scale: 0.92, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.92, y: 20 }}
							transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
							className="w-[95vw] md:w-[900px] md:h-[540px] pointer-events-auto"
						>
							<div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-visible flex">
								{/* Close Button - Overlapping on Right Edge */}
								<motion.button
									whileHover={{ scale: 1.1, rotate: 90 }}
									whileTap={{ scale: 0.9 }}
									onClick={onClose}
									className="absolute -top-4 -right-4 z-20 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-lg"
									aria-label="Close"
								>
									<X className="w-6 h-6 text-black" strokeWidth={2.5} />
								</motion.button>

								{/* Left Section - Content & Form (~55%) */}
								<motion.div
									initial={{ opacity: 0, x: -40 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.1, duration: 0.4 }}
									className="w-full md:w-[55%] px-8 md:px-12 lg:px-14 py-10 md:py-12 flex flex-col justify-center"
								>
									{/* Heading */}
									<motion.h2
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.15, duration: 0.3 }}
										className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight leading-tight"
									>
										SUBSCRIBE<br />NOW
									</motion.h2>
									
									{/* Subtext */}
									<motion.div
										initial={{ opacity: 0, y: 15 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2, duration: 0.3 }}
										className="mb-8"
									>
										<p className="text-base md:text-lg text-gray-800 font-light leading-relaxed mb-2">
											DON'T MISS OUT ON THE LATEST DROP<br />AND OFFERS.
										</p>
										<p className="text-sm text-gray-600 font-light">
											Be the first to get notified.
										</p>
									</motion.div>

									{/* Divider */}
									<motion.div
										initial={{ opacity: 0, scaleX: 0 }}
										animate={{ opacity: 1, scaleX: 1 }}
										transition={{ delay: 0.25, duration: 0.3 }}
										className="w-20 h-px bg-gray-300 mb-10 origin-left"
									/>

									{/* Form */}
									<motion.form
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.3 }}
										onSubmit={handleSubmit}
										className="space-y-4"
									>
										{/* Email Input */}
										<motion.div
											initial={{ opacity: 0, y: 15 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.35, duration: 0.3 }}
											className="relative"
										>
											<Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
											<input
												type="email"
												placeholder="Email address"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												required
												className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded text-black text-sm placeholder:text-gray-450 focus:outline-none focus:bg-white focus:border-gray-400 transition-all duration-200"
											/>
										</motion.div>

										{/* Phone Input */}
										<motion.div
											initial={{ opacity: 0, y: 15 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.4, duration: 0.3 }}
											className="flex gap-3 h-12"
										>
											<select
												value={countryCode}
												onChange={(e) => setCountryCode(e.target.value)}
												className="px-3 bg-gray-50 border border-gray-200 rounded text-black text-sm focus:outline-none focus:bg-white focus:border-gray-400 transition-all duration-200 cursor-pointer min-w-fit"
											>
												{countryCodes.map((country) => (
													<option key={country.code} value={country.code}>
														{country.flag} {country.code}
													</option>
												))}
											</select>
											<input
												type="tel"
												placeholder="Enter a phone number"
												value={phone}
												onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
												required
												className="flex-1 px-4 bg-gray-50 border border-gray-200 rounded text-black text-sm placeholder:text-gray-450 focus:outline-none focus:bg-white focus:border-gray-400 transition-all duration-200"
											/>
										</motion.div>

										{/* Submit Button */}
										<motion.button
											type="submit"
											initial={{ opacity: 0, y: 15 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.45, duration: 0.3 }}
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											className="w-full h-[52px] mt-6 bg-black text-white font-bold text-base tracking-wide rounded hover:bg-gray-900 transition-colors duration-200"
										>
											SUBSCRIBE
										</motion.button>
									</motion.form>
								</motion.div>

								{/* Right Section - Image (~45%) */}
								<motion.div
									initial={{ opacity: 0, x: 40 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.1, duration: 0.4 }}
									className="hidden md:flex w-[45%] overflow-hidden bg-gradient-to-br from-[#F5C8A0] via-[#F0B896] to-[#E8A878]"
								>
									<img
										src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop"
										alt="Fashion model"
										className="w-full h-full object-cover"
										onError={(e) => {
											const target = e.currentTarget as HTMLImageElement;
											target.src = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1470&auto=format&fit=crop";
										}}
									/>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	);
};
