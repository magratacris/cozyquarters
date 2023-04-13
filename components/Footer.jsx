import React, { useRef } from "react";
//react-icons
import { BsArrowRightCircleFill } from "react-icons/bs";
//react-hot-toast
import { toast } from "react-hot-toast";
//next
import Image from "next/image";
const Footer = () => {
  const newsLetter = useRef();
  const newsletterHandler = () => {
    if (newsLetter.current.value.trim().length > 0) {
      toast.success(`Subscribed to newsletter!`);
      newsLetter.current.value = "";
    }
    return;
  };
  return (
    <div className="  mt-20   flex  flex-col   bg-main-color text-white">
      <div className="mx-auto flex w-4/5 flex-col   py-8 xl:flex-row">
        <div className=" flex flex-1 justify-center ">
          <h1 className="items-center pt-2 text-center text-xl md:text-3xl  lg:items-start xl:text-start 3xl:text-4xl">
            Be the first to receive news from us!
          </h1>
        </div>
        <div className="flex flex-1 justify-center">
          <input
            type="text"
            ref={newsLetter}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                newsletterHandler();
              }
            }}
            placeholder="youremail@example.com"
            className="input  w-56 items-center border-b-2 border-none p-2 pl-0 text-text-main outline-none md:w-[16rem]  lg:w-[29rem]  lg:items-start"
          />

          <div className=" flex cursor-pointer items-center justify-center text-4xl">
            <BsArrowRightCircleFill
              className="items-center"
              onClick={() => {
                newsletterHandler();
              }}
            />
          </div>
        </div>
      </div>
      <div className="m-6 mx-auto mt-12 flex w-4/5 flex-col flex-wrap  items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-start">
        <div>
          <div className="flex w-44 flex-col gap-4">
            <Image
              src="/images/logo1.png"
              alt=""
              width={150}
              height={60}
              className="w-full
            "
            />
            <p>Experience the joy of furniture shopping with us.</p>
            <p className="text-gray-500">
              Copyright © 2023 by CozyQuarters, All rights reserved.
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xl">Company</p>
          <nav className=" text-gray-500">
            <ul className="flex flex-col gap-3">
              <li>About Us</li>
              <li>Store Locations</li>
              <li>Reviews</li>
              <li>Careers</li>
            </ul>
          </nav>
        </div>
        <div>
          <p className="mb-4 text-xl">Shop</p>
          <nav className="text-gray-500">
            <ul className="flex flex-col gap-3">
              <li>Beds / Mattresses</li>
              <li>Lighting</li>
              <li>Desks</li>
              <li>Kitchenware</li>
              <li>Bathroom</li>
            </ul>
          </nav>
        </div>
        <div>
          <p className="mb-4 text-xl">Support</p>
          <nav className="text-gray-500">
            <ul className="flex flex-col gap-3">
              <li>FAQs</li>
              <li>Reviews</li>
              <li>Contact Us</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
