import React from "react";
import BrandCard from "./brands-card";

const brands = [
  { id: 1, name: "Act+", imgUrl: "/act.jpg" },
  { id: 2, name: "Bioderma", imgUrl: "/bioderma.jpg" },
  { id: 3, name: "curology", imgUrl: "/curology.jpg" },
  { id: 4, name: "gucci", imgUrl: "/gucci.jpg" },
  { id: 5, name: "nail polish", imgUrl: "/other.jpg" },
];
const Brandsection = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold capitalize my-4">Popular brands</h1>
      <div className="flex justify-between lg:grid lg:grid-cols-5 gap-4 overflow-auto">
        {brands.map((brand, index) => {
          return (
            <>
              <BrandCard key={index} brand={brand} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export { Brandsection };
