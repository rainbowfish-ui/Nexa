import Image from "next/image";
import React from "react";

const features = [
  {
    name: "feature1",
    image: "/aquila.webp",
  },
  {
    name: "feature2",
    image: "/birla.webp",
  },
  {
    name: "feature3",
    image: "/creative.webp",
  },
  {
    name: "feature4",
    image: "/nomedia.webp",
  },
  {
    name: "feature5",
    image: "/persist.webp",
  },
];

const Features = () => {
  return (
    <div className="size-full flex items-center justify-center py-10">
      {features.map(({ image, name }, idx) => {
        return (
          <div
            className={`size-40 rounded-xl p-1 bg-gray-200 shadow-lg ${
              idx % 2 === 0 ? "-rotate-12" : "rotate-12"
            }`}
            key={name}
          >
            <Image
              src={image}
              alt={name}
              className="size-full rounded-lg overflow-hidden bg-white"
              width={160}
              height={160}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Features;
