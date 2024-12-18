import { useEffect, useState } from "react";

const useOnScreen = (ref: any) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return { isIntersecting };
};

export default useOnScreen;
