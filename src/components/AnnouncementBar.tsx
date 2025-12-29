import { motion } from "framer-motion";

export const AnnouncementBar = () => {
  const text = "ORDERS WILL TAKE 20 TO 25 WORKING DAYS FOR DELIVERY";
  const repeatedText = Array(8).fill(text).join("  •  ");

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-black text-white py-2.5 overflow-hidden z-[100] h-10">
      <motion.div
        animate={{ x: [0, -3000] }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="whitespace-nowrap text-[11px] tracking-[0.15em] font-medium inline-block"
      >
        {repeatedText}
      </motion.div>
    </div>
  );
};
