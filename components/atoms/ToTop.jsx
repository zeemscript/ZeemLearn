"use client";

import React, { useState, useEffect } from "react";
import { MoveUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-700 text-white  p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-500 transition duration-300"
          aria-label="Scroll to top"
        >
          <MoveUp size={24}/>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
