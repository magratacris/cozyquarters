import React, { useState } from "react";
import { useStateContext } from "@/context/StateContext";
//next
import Image from "next/image";
//sanity
import { client, urlFor } from "@/lib/client";
//react-icons
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
//components
import Products from "@/components/homepage/Products";
//marquee
import Marquee from "react-fast-marquee";

const ProductDetails = ({ slugDetails, mayLike }) => {
  const { image, name, details, price, summary } = slugDetails;
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const [index, setIndex] = useState(0);
  const margin = "mx-5";
  const handleBuyNow = () => {
    onAdd(slugDetails, qty);
    setShowCart(true);
  };

  return (
    <div>
      <div className="m-10 mx-auto mt-16 flex max-w-[72rem] flex-col gap-5 px-4 text-black lg:flex-row xl:gap-10">
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <div
            id="image-container "
            className="h-64 w-64 sm:h-[22rem] sm:w-[22rem]"
          >
            <Image
              src={urlFor(image && image[index]).url()}
              width={420}
              height={420}
              className=" rounded-xl bg-white hover:bg-[#f02d34]"
            />
          </div>
          <div id="small-images-container" className="mt-12 flex gap-3">
            {image?.map((item, i) => (
              <Image
                key={i}
                src={urlFor(item).url()}
                width={421}
                height={421}
                onMouseEnter={() => setIndex(i)}
                className={
                  i === index ? "selected-image small-image" : "small-image"
                }
              />
            ))}
          </div>
        </div>
        <div id="product-detail-desc" className="w-full">
          <h1 className="text-4xl">{name}</h1>
          <p className="mt-2 text-gray-500">{details}</p>
          <div className="mt-3 flex items-center gap-1 text-yellow-500 ">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-main-color">(48)</p>
          </div>
          <p className="py-5">{summary}</p>
          <p className="mt-2">${price}</p>
          <div id="quantity" className="flex select-none items-center gap-6">
            <h3>Quantity:</h3>
            <p
              id="quantity-desc"
              className="mt-2 flex items-center border-2 border-main-color "
            >
              <span
                id="minus"
                onClick={decQty}
                className="cursor-pointer border-r-2 border-main-color py-3 px-3 text-[#f02d34]"
              >
                <AiOutlineMinus />
              </span>
              <span
                id="num"
                className="cursor-pointer border-r-2  border-main-color py-2 px-3"
              >
                {qty}
              </span>
              <span
                id="plus"
                onClick={incQty}
                className="cursor-pointer  py-2 px-3 text-green-300"
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div id="buttons" className="mt-5 flex select-none gap-3 md:gap-7">
            <button
              type="button"
              id="add-to-cart"
              onClick={() => onAdd(slugDetails, qty)}
              className="mt-10 w-28 transform rounded-xl border-2 border-main-color  text-sm font-medium  duration-500 hover:scale-105 md:w-36 md:text-base lg:w-48"
            >
              Add to Cart
            </button>
            <button
              type="button"
              id="add-to-cart"
              onClick={handleBuyNow}
              className="mt-10 w-28 transform rounded-xl border-2 border-gray-500 bg-main-color px-1 py-2 font-medium text-white duration-500 hover:scale-105 md:w-36 md:px-2 md:py-4 lg:w-48"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div id="mayLike-product-wrapper" className="mt-16">
        <h2 className="m-8 text-center ">You may also like</h2>
        <div className="">
          <div>
            <Marquee
              pauseOnHover="true"
              speed={90}
              gradient={false}
              style={{
                display: "flex",
                width: "72rem",
                margin: "auto",
                marginTop: "1.25rem",
                justifyContent: "center",
              }}
            >
              {mayLike.map((item) => (
                <Products
                  key={item._id}
                  product={item}
                  className="mx-4"
                  margin={margin}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticProps = async ({ params: { slug } }) => {
  //details
  const queryDetails = `*[_type == "product" && slug.current == '${slug}'][0]`;

  const slugDetails = await client.fetch(queryDetails);
  //you may also like
  const queryMayLike = ` *[_type == "product" && "${slugDetails.filters[0]}" in filters[] ]`;
  const mayLike = await client.fetch(queryMayLike);
  return {
    props: { slugDetails, mayLike },
  };
};
export const getStaticPaths = async () => {
  const query = `*[_type == "product" {
    slug {
      current
    }
  }]`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
