"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 left-0 right-0 bottom-0 sm:text-2xl md:text-4xl text-white lg:text-6xl xl:text-8xl cursor-default z-50 w-fit h-fit "
          initial={{ opacity: 1 }}
          animate={{ display: "none" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {pathName === "/" ? "HOME" : pathName.substring(1).toUpperCase()}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black bottom-0 rounded-t-[100px] z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)] ">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
