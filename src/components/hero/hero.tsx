import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="w-full ">
        <Image
          src={"/hair-1.jpg"}
          alt="hero"
          className="w-full max-h-[400px] object-cover"
          width={800}
          height={400}
        />
      </div>
    </div>
  );
};

export { Hero };
