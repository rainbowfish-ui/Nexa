import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="size-full flex items-center justify-center py-10">
      <div className="size-40 rounded-xl p-1 bg-gray-200 rotate-12">
        <Image
          src="/aquila.webp"
          alt="feature1"
          className="size-full rounded-lg overflow-hidden bg-white"
          width={160}
          height={160}
        />
      </div>
      <div className="size-40 rounded-xl p-1 bg-gray-200 -rotate-12">
        <Image
          src="/birla.webp"
          alt="feature1"
          className="size-full rounded-lg overflow-hidden bg-white"
          width={160}
          height={160}
        />
      </div>
      <div className="size-40 rounded-xl p-1 bg-gray-200 rotate-12">
        <Image
          src="/creative.webp"
          alt="feature1"
          className="size-full rounded-lg overflow-hidden bg-white"
          width={160}
          height={160}
        />
      </div>
      <div className="size-40 rounded-xl p-1 bg-gray-200 -rotate-12">
        <Image
          src="/nomedia.webp"
          alt="feature1"
          className="size-full rounded-lg overflow-hidden bg-white"
          width={160}
          height={160}
        />
      </div>
      <div className="size-40 rounded-xl p-1 bg-gray-200 rotate-12">
        <Image
          src="/persist.webp"
          alt="feature1"
          className="size-full rounded-lg overflow-hidden bg-white"
          width={160}
          height={160}
        />
      </div>
    </div>
  );
};

export default Features;
