import React, { useState } from "react";
import "./ImageGallery.css";

// Define the type of each image object
interface ImageItem {
  id: string;
  src: string;
}

// Define the list of images
export const images1: ImageItem[] = [
  { id: "des", src: "/Desert.png" },
  { id: "hil", src: "/Hill.png" },
  { id: "mou", src: "/Mountain.png" },
  { id: "for", src: "/Forest.png" },
  { id: "pla", src: "/Plain.png" },
  { id: "sea", src: "/Seashore.png" },
];

export const images2: ImageItem[] = [
  { id: "sunny", src: "/Sunny.png" },
  { id: "cloudy", src: "/Cloudy.png" },
  { id: "rainy", src: "/Rainy.png" },
  { id: "stormy", src: "/Stormy.png" },
  { id: "snowy", src: "/Snowy.png" },
  { id: "windy", src: "/Windy.png" },
];

export const images3: ImageItem[] = [
  { id: "happy", src: "/Happy.png" },
  { id: "calm", src: "/Calm.png" },
  { id: "scared", src: "/Scared.png" },
  { id: "sad", src: "/Sad.png" },
  { id: "excited", src: "/Excited.png" },
  { id: "funny", src: "/Funny.png" },
];



interface ImageGalleryProps {
  images: ImageItem[];
  onSelect?: (id: number) => void;  
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onSelect }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setSelectedId(id);
    onSelect?.(id as unknown as number);  // 通知父组件
  };

  return (
    <div className="image-container">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          className={`image-item ${hoveredId === image.id ? "hovered" : ""} ${selectedId === image.id ? "selected" : ""}`}
          onMouseEnter={() => setHoveredId(image.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => handleClick(image.id)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;




