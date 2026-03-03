import { useState, useEffect } from "react";
import im1 from "../images/im1.jpg";
import im2 from "../images/im2.jpg";
import im3 from "../images/im3.jpg";
import im4 from "../images/im4.jpg";
import im5 from "../images/im5.jpg";

export default function Slider() {
  const images = [im1, im2, im3, im4, im5];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <img src={images[index]} alt="Moving Work" />
    </div>
  );
}