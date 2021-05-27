import { useState, useEffect } from "react";

const useWindow = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.addEventListener("resize", handleWindowResize);
  }, []);

  return width;
};

export default useWindow;
