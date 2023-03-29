import React from "react";
import { useStateContext } from "@/context/StateContext";
//sanity
import { urlFor } from "@/lib/client";
//next
import Link from "next/link";
//framer-motion
import { motion } from "framer-motion";

const Categories = ({ categories, allProducts }) => {
  const { filterProcess } = useStateContext();

  return (
    <div name="categories">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-16 max-w-[72rem] px-4 pt-9"
      >
        <div>
          <h3 className="mb-12 text-center text-2xl md:text-4xl">
            Top Categories
          </h3>
          <div className="flex flex-wrap justify-around ">
            {categories.map((item) => (
              <Link href="/furnitures" key={item._id}>
                <div
                  onClick={() => filterProcess(item.name, allProducts)}
                  className="group relative m-2 flex h-32 w-24 cursor-pointer flex-col overflow-hidden  rounded-xl bg-[#777777] shadow-2xl md:h-60 md:w-44"
                >
                  <h3
                    className="absolute bottom-2 left-1 z-20 mx-auto text-sm text-white
                    "
                  >
                    {item.name}
                  </h3>
                  <div className="absolute bottom-0 z-10 m-0 h-24 w-full  bg-gradient-to-t from-black "></div>
                  <img
                    src={urlFor(item.image && item.image)}
                    className="h-full w-full transform rounded-t-xl object-cover duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Categories;
//data fetching
