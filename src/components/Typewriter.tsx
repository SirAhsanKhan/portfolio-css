import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typewriter = () => {
  const el = useRef<HTMLSpanElement | null>(null); // Define the type for el
  const typedInstance = useRef<Typed | null>(null); // Define the type for typedInstance

  useEffect(() => {
    if (el.current) {
      typedInstance.current = new Typed(el.current, {
        strings: [
          "Full-stack developer.",
          "UI/UX Designer.",
          "Your one-stop solution.",
        ], // Dynamic text
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
      });
    }

    // Cleanup on component unmount
    return () => {
      typedInstance.current?.destroy(); // Optional chaining to safely call destroy
    };
  }, []);

  // Function to stop animation on hover
  const handleMouseEnter = () => {
    typedInstance.current?.stop(); // Optional chaining
  };

  // Function to resume animation when hover ends
  const handleMouseLeave = () => {
    typedInstance.current?.start(); // Optional chaining
  };

  return (
    <span
      ref={el}
      className="text-[#fbbf24]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></span>
  );
};

export default Typewriter;
