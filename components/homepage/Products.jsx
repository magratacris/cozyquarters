//sanity
import { urlFor } from "@/lib/client";
//next
import Link from "next/link";
import Image from "next/image";
//react-icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
//framer-motion
import { motion } from "framer-motion";

const Products = ({
  product: { image, slug, name, details, price },
  margin,
  section,
}) => {
  return (
    <Link href={`/furnitures/${slug.current}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={` ${margin}
        } flex w-32 cursor-pointer flex-col rounded-xl shadow-2xl md:w-48   lg:w-[15.625rem] `}
      >
        <div className="overflow-hidden rounded-t-xl border-[1px] border-[#e4e3e3]   ">
          <Image
            src={urlFor(image && image[0]).url()}
            width={420}
            height={420}
            className="h-full w-full transform rounded-t-xl object-cover duration-500 hover:scale-110"
          />
        </div>
        <div className="flex w-full flex-col justify-around rounded-b-xl bg-card-color  p-3 text-white ">
          <h3 className=" mb-3 h-6 text-xs md:mb-0 md:h-12 md:text-sm lg:text-lg">
            {name}
          </h3>

          <p className=" mb-4 h-12  text-[0.6rem] text-white  md:text-xs">
            {details}
          </p>
          <h1 className="mb-2 text-xs md:text-sm">${price}</h1>
          {section === "bestSeller" && (
            <div className="flex items-center ">
              <div className="flex  text-[0.6rem] text-yellow-500 md:text-sm">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p className="text-[0.6rem] text-white md:text-sm">(48)</p>
            </div>
          )}
          <p className="text-[0.6rem] text-gray-300">3 versions available</p>
        </div>
      </motion.div>
    </Link>
  );
};
export default Products;
