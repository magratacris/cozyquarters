//components
import Products from "@/components/homepage/Products";
//react-icons
import { MdOutlineSwipe } from "react-icons/md";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//framer-motion
import { motion } from "framer-motion";

const Featured = ({ featured }) => {
  return (
    <div className="mx-auto mt-16  min-h-[45rem] max-w-[72rem] rounded-3xl bg-main-color px-2 shadow-2xl sm:px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col justify-between text-[#F1F0E8] lg:flex-row">
          <div className="flex items-center justify-center py-4">
            <h3 className=" align-unset items-center text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl">
              Featured Products
            </h3>
          </div>
          <div className="py-8 text-center text-sm md:pr-4 md:indent-14 lg:w-[30rem] lg:text-start">
            Discover the beauty of our Featured Products, carefully curated to
            enhance your home and elevate your lifestyle. From stylish decor to
            practical essentials, we have everything you need to create a space
            you'll love.
          </div>
        </div>

        <div className="my-5 flex items-center justify-center text-text-main">
          <span className="animate-pulse items-center text-xl">
            <MdOutlineSwipe />
          </span>
        </div>
        <Swiper
          className="h-auto select-none  gap-1  pt-11 "
          style={{
            "--swiper-pagination-color": "#F1F0E8",
            "--swiper-pagination-bullet-inactive-color": "#d1d6da",
            "--swiper-pagination-bullet-inactive-opacity": ".6",
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            type: "progressbar",
          }}
          loop="true"
          spaceBetween={50}
          slidesPerView={"auto"}
        >
          {featured.map((item) => (
            <SwiperSlide
              key={item._id}
              style={{ width: "auto" }}
              className="mt-7 h-auto w-auto "
            >
              <Products product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Featured;
