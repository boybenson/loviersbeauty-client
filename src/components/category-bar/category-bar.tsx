const categories: string[] = ["all", "wigs", "nails", "others"];

const CategoryBar = () => {
  return (
    <section className="w-full bg-[#F4F3F1] py-[10px] font-semibold capitalize text-lg text-primaryBrown">
      <div className="flex justify-center w-full ">
        <ul className="flex ">
          {categories.map((category: string, index: number) => {
            return (
              <>
                <li key={index} className="mx-4">
                  {category}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export { CategoryBar };
