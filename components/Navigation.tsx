import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import Image from "next/image";

function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ${scrollPosition > 0 || showNav ? "bg-white" : ""}
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`sm:px-16 px-6 py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8`}
      >
        <Image
          src="/search.svg"
          alt="Search"
          width={24}
          height={24}
          className="object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          Zeph
        </h2>
        <Image
          src="/menu.svg"
          alt="Menu"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      {/* <nav className="py-10 flex align-center justify-center">
        <ul className="flex items-center gap-10 text-xl font-burtons">
          <li className="hover:-translate-x-2 ease-in-out duration-300">
            <Link href="projects">Projects</Link>
          </li>
          <li className="hover:-translate-y-2 ease-in-out duration-300">
            <Link href="/" className="text-2xl font-semibold">
              Zeph
            </Link>
          </li>
          <li className="hover:translate-x-2 ease-in-out duration-300">
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
      </nav> */}
    </motion.nav>
  )
}
export default Navigation;
