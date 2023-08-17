import { ProductCard } from "..";

interface ProductListProps {
  data: any;
  title: string;
  url?: string;
  showMore: boolean;
}

const ProductList = ({ data, title, url, showMore }: ProductListProps) => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold capitalize my-4">{title}</h1>
        {showMore && (
          <a href={url || "#"} className="text-pink-700 text-sm">
            Show More
          </a>
        )}
      </div>
      <div className="flex gap-4 justify-between  lg:grid lg:grid-cols-4  overflow-x-auto">
        {data.map((product: any, index: number) => {
          return <ProductCard key={index} product={product} sold={false} />;
        })}
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </div>
  );
};

export { ProductList };
