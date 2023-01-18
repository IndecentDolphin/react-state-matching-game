import { createRef, useCallback, useEffect, useRef, useState } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState(false);
  //   const ref = useRef(hover);
  const manualRef = createRef();

  const enter = () => {
    setHovered(true);
  };

  const leave = () => {
    setHovered(false);
  };

  useEffect(() => {
    const refCopy = manualRef;
    console.log("refCopy", refCopy);
    refCopy.current.addEventListener("mouseenter", enter);
    refCopy.current.addEventListener("mouseleave", leave);

    return () => {
      refCopy.current.removeEventListener("mouseenter", enter);
      refCopy.current.removeEventListener("mouseleave", leave);
    };
  });

  return [manualRef, hovered];
};

export default useHover;
