import React, { useEffect } from "react";
import { useStateContext } from "@/context/StateContext";
//sanity
import { client } from "@/lib/client";
//components
import Products from "@/components/homepage/Products";
//framer-motion

const AllProducts = ({ allProducts }) => {
  const { filterProcess, filterData, activeFilter } = useStateContext();

  const categories = [
    "All",
    "Beds / Mattresses",
    "Lighting",
    "Desks",
    "Kitchenware",
    "Bathroom",
  ];

  //data fetching / client
  useEffect(() => {
    filterProcess(activeFilter, allProducts);
  }, [activeFilter]);

  return (
    <>
      <div className="mx-auto mt-16 min-h-screen max-w-[72rem] select-none sm:px-2 md:px-4">
        <div className="mt-8 mb-14">
          <nav className="mx-auto max-w-[50rem] ">
            <ul className="flex flex-wrap justify-center gap-4 px-4 sm:gap-2">
              {categories.map((item) => (
                <li key={item}>
                  <div
                    onClick={() => filterProcess(item, allProducts)}
                    className={
                      activeFilter === item
                        ? "page-filter active-filter"
                        : "page-filter "
                    }
                  >
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap  justify-evenly gap-2 md:gap-4">
          {filterData.map((item) => (
            <Products key={item._id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;

//data fetching
export const getStaticProps = async () => {
  //   //all products
  const allProductsQuery = '*[_type == "product"]';
  const allProducts = await client.fetch(allProductsQuery);

  return {
    props: { allProducts },
  };
};
