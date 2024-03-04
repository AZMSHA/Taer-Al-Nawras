import { useEffect } from "react";

const LazyImages = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          console.log(img.src);
          img.classList.remove("lazy-load");
          observer.unobserve(img);
        }
      });
    });

    const imgs = document.querySelectorAll(`img.lazy-load`);
    imgs.forEach((img) => observer.observe(img));

    // Cleanup function
    return () => {
      imgs.forEach((img) => observer.unobserve(img));
    };
  }); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return null;
};

export default LazyImages;
