import { useState, useEffect, useRef } from "react";
import { Button } from "@heroui/react";
import ThemeToggle from "./ThemeToggle";
import { gsap } from "gsap";
import { smoothScrollTo } from "@/lib/gsap";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    closeMobileMenu();
    smoothScrollTo(href, 1);
  };

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  // GSAP animations for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Animate backdrop
      if (backdropRef.current) {
        gsap.fromTo(backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.2 }
        );
      }

      // Animate mobile menu
      if (mobileMenuRef.current) {
        gsap.fromTo(mobileMenuRef.current,
          { x: -250, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      }
    } else {
      // Animate backdrop out
      if (backdropRef.current) {
        gsap.to(backdropRef.current, { opacity: 0, duration: 0.2 });
      }

      // Animate mobile menu out
      if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, { x: -250, opacity: 0, duration: 0.3, ease: "power2.in" });
      }
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-40 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="#home" 
            className="text-xl font-bold tracking-tight text-primary dark:text-blue-400 hover:scale-105 transition-transform duration-200"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            AV.
          </a>
          {/* Mobile Menu Button - now next to AV logo */}
          <button
            className="md:hidden ml-2 text-gray-600 dark:text-gray-300 focus:outline-none hover:scale-110 transition-transform duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Button
                  as="a"
                  href={item.href}
                  variant="light"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition font-medium px-4 py-2 rounded-lg shadow-none hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 transform hover:scale-105 active:scale-95"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Theme Toggle Button */}
        <ThemeToggle />
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            ref={backdropRef}
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          {/* Left Drawer */}
          <div
            ref={mobileMenuRef}
            className="fixed top-0 left-0 h-full w-3/4 max-w-xs md:hidden bg-white dark:bg-gray-800 z-50 shadow-md flex flex-col"
          >
            <div className="flex justify-between items-center px-4 py-4">
              <span className="text-xl font-bold tracking-tight text-primary dark:text-blue-400">AV.</span>
              <button
                className="text-gray-600 dark:text-gray-300 focus:outline-none hover:scale-110 transition-transform duration-200"
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="px-4 pb-4 space-y-3">
              {menuItems.map((item, index) => (
                <li key={item.href}>
                  <Button
                    as="a"
                    href={item.href}
                    variant="light"
                    className="w-full block py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition font-medium rounded-lg shadow-none hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-left transform hover:scale-105 active:scale-95"
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
