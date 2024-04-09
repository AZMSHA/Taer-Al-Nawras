import { useEffect, useState } from "react";

function useFetchImages(pathsRelativeToRoot) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(pathsRelativeToRoot);
  }, [pathsRelativeToRoot]);

  const fetchImages = async (pathsRelativeToRoot) => {
    try {
      const paths = pathsRelativeToRoot;
      const response = await fetch("img-fetcher.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paths }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const imageUrls = await response.json();
      setImages(imageUrls);
    } catch (error) {
      console.log("Fetch failed: ", error);
    }
  };

  return images;
}

export default useFetchImages;
