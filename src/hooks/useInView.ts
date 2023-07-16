import { useState, useEffect, useRef } from "react";

const useInView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
  }, []);

  return [isVisible, observerTarget];
};
export default useInView;
