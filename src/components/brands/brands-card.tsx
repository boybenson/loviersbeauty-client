import Image from "next/image";
import React from "react";

interface brandInterface {
  id: number;
  name: string;
  imgUrl: string;
}
const BrandCard = ({ brand }: any) => {
  return (
    <div className=" min-w-[150px]">
      <div className="w-full ">
        <Image
          src={brand.imgUrl}
          alt="hair"
          className="object-cover w-full h-[150px]"
          width={200}
          height={150}
        />
      </div>
      <div className="flex flex-col text-sm font-semibold capitalize p-2 bg-[#F4F3F1] ">
        <p className="">{brand.name}</p>
      </div>
    </div>
  );
};

export default BrandCard;
