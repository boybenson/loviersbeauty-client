import React from "react";
import {
  Brandsection,
  CategoryBar,
  Gallery,
  Hero,
  ProductList,
} from "./components";

const recommendedProducts = [
  { id: "1", name: "Product 1", price: 100, imgUrl: "./hair-1.jpg" },
  { id: "1", name: "Product 1", price: 100, imgUrl: "./hair-6.jpg" },
  { id: "1", name: "Product 1", price: 100, imgUrl: "./hair-3.jpg" },
  { id: "1", name: "Product 1", price: 100, imgUrl: "./hair-4.jpg" },
  // { id: "1", name: "Product 1", price: 100, imgUrl: "./hair-5.jpg" },
];

const Home = () => {
  return (
    <>
      <CategoryBar />
      <div className=" max-w-[1296px] mx-auto">
        <Hero />
        <ProductList
          data={recommendedProducts}
          title={"Recommended for you"}
          showMore={false}
        />
        <Brandsection />
        <ProductList
          data={recommendedProducts}
          title={"Top wigs"}
          showMore={true}
          url={"#"}
        />
        <Gallery />
      </div>
    </>
  );
};

export default Home;
