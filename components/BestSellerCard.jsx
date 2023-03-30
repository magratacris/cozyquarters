//next
import Link from "next/link";
//sanity
import { urlFor } from "@/lib/client";
//react-icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const BestSellerCard = ({ product: { slug, name, price, details, image } }) => {
  return (
    <Link href={`/furnitures/products/${slug.current}`}>
      <div className="mx-5 flex  w-48  cursor-pointer flex-col rounded-xl shadow-xl lg:w-[17rem]">
        <div className="overflow-hidden rounded-t-xl border-[1px] bg-[#e4e3e3] ">
          <img
            src={urlFor(image && image[0])}
            className="h-full w-full transform rounded-t-xl object-cover duration-500 hover:scale-110"
          />
        </div>
        <div className="flex h-[9rem] flex-col  rounded-b-xl bg-card-color  p-3 ">
          <div className="flex  justify-between">
            <h3 className="w-[10rem] text-white">{name}</h3>
            <span className="text-white">${price}</span>
          </div>
          <div className="flex">
            <div className="flex text-yellow-500">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-sm text-white">(48)</p>
          </div>
          <p className=" mt-4 h-[3.5rem] text-xs text-white ">{details}</p>
        </div>
      </div>
    </Link>
  );
};

export default BestSellerCard;
