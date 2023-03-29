import React from "react";
import { useStateContext } from "@/context/StateContext";
//sanity
import { urlFor } from "@/lib/client";
// next
import Links from "next/link";
import Image from "next/image";
//react-scroll
import { Link } from "react-scroll";
//react-icons
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
//swiperjs
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
//framer-motion
import { motion } from "framer-motion";

const Hero = ({
  banner: { image, buttonText, mainText, smallText, smallText2 },
}) => {
  const { setActiveFilter } = useStateContext();

  return (
    <section>
      <div className="relative">
        <div className="mx-auto h-screen max-w-[72rem]">
          <div className="flex h-[90vh]  flex-col gap-5  px-4   md:pt-2 lg:flex-row  3xl:pt-14">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="order-2 flex  flex-1 flex-col gap-2  lg:order-1 lg:w-1/2 xl:gap-5"
            >
              <h1 className=" text-center text-2xl font-bold capitalize text-main-color   md:text-4xl lg:pt-16 lg:text-start lg:text-5xl xl:text-6xl ">
                {mainText}
              </h1>
              <h3 className="text-center text-xs sm:text-sm md:text-start md:indent-6 ">
                {smallText}
              </h3>

              <Links href="/furnitures">
                <div className=" flex md:max-lg:items-center md:max-lg:justify-center">
                  <button
                    onClick={() => setActiveFilter("All")}
                    className="flex  w-full items-center justify-center self-start rounded-full border-2 border-main-color p-2 text-center font-medium duration-500 hover:bg-main-color hover:text-text-main  sm:px-5 sm:py-3 md:w-auto lg:py-4 lg:px-8"
                  >
                    <span className="text-sm">{buttonText}</span>

                    <span className="inline-block px-2 text-lg">
                      <BsFillArrowUpRightCircleFill />
                    </span>
                  </button>
                </div>
              </Links>
              <div className="mt-auto lg:mt-14 ">
                <div className="flex flex-col items-center justify-center xl:flex-row">
                  <div className="flex  w-48 justify-center -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white md:h-10 md:w-10"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white md:h-10 md:w-10"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-6 w-6  rounded-full ring-2 ring-white md:h-10 md:w-10"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-6 w-6   rounded-full ring-2 ring-white md:h-10 md:w-10"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="text-center text-[0.5rem] text-gray-500 sm:text-sm lg:text-start">
                    {smallText2}
                  </div>
                </div>
                <Link to="categories" smooth={true} spy={true} duration={500}>
                  <div className="flex cursor-pointer justify-center self-center">
                    <span className="self-center">
                      {/* <UseAnimations animation={arrowDown} size={56} /> */}
                      <Image
                        src="/images/arrowdown.gif"
                        width={80}
                        height={80}
                      ></Image>
                    </span>
                  </div>
                </Link>
              </div>
            </motion.div>

            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              loop="true"
              effect="coverflow"
              pagination={{ clickable: true }}
              navigation
              style={{
                "--swiper-pagination-color": "#363636",
                "--swiper-pagination-bullet-inactive-color": "#787E92",
                "--swiper-navigation-color": "#363636",
              }}
              className="w-full select-none overflow-hidden rounded-3xl  lg:order-2 lg:h-[38rem] lg:w-1/2"
            >
              {image.map((item, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={urlFor(item)}
                    className="h-full w-full rounded-3xl object-cover duration-500 hover:scale-105"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
