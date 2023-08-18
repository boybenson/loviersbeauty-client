import Image from "next/image";

interface productInterface {
  name: string;
  imgUrl: string;
  price?: number;
  sold?: number;
}
interface productProps {
  product: productInterface;
  sold: boolean;
}

const ProductCard = ({ product, sold }: productProps) => {
  return (
    <>
      <div className="w-full card-width max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="overflow-hidden h-[220px] rounded-t-lg ">
          <Image
            className="h-full w-full cursor-pointer object-cover hover:scale-[1.05] transition-all duration-300 ease-out"
            src={product.imgUrl}
            alt="product image"
            width={200}
            height={120}
          />
        </div>
        <div className="px-5 pb-5 mt-2">
          <div className="flex justify-between items-center">
            <a href="#">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 ">
                {product.name}
              </h5>
            </a>
            <span className="text-xl font-bold text-gray-900 ">GHS 599.00</span>
          </div>
          <div className="my-2 font-normal text-gray-600 ">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              fugit vitae
            </p>
          </div>
          {/* <div className="flex items-center mt-2.5 mb-5">
            <span className="bg-primary_light text-primary_hover text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              5.0
            </span>
          </div> */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <a
              href="#"
              className="text-white w-full bg-primary_purple hover:bg-primary_hover focus:ring-4 focus:outline-none focus:ring-primary_hover font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-200 "
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductCard };
