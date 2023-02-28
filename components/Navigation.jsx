import { useState, useEffect } from "react";
import Link from "next/link";

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

  return (
    <>
      <main
        className={`fixed w-full transition-colors px-10 min-h-20 z-50 
                    ${scrollPosition > 0 || showNav ? "bg-white" : ""}`}
      >
        <nav className="py-10 flex align-center justify-center">
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
        </nav>
      </main>
    </>
  );
}
export default Navigation;

// Button style
// className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
