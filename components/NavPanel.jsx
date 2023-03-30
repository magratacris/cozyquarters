import { useStateContext } from "@/context/StateContext";
//next
import Link from "next/link";
//framer-motion
import { motion } from "framer-motion";

const NavPanel = () => {
  const { setActiveFilter, setNavPanActive, navPanActive } = useStateContext();
  const linkPageHandler = (products) => {
    if (products) {
      setActiveFilter("All");

      setNavPanActive((prevState) => !prevState);
    } else {
      setNavPanActive((prevState) => !prevState);
    }
  };

  return (
    <div className="fixed left-0 top-0 z-20 w-screen  bg-black/50 transition-all duration-1000 ease-in-out">
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: "0%" }}
        exit={{ x: "-100%" }}
        className="relative float-left h-screen w-[90%] bg-[#f8f8f8] py-10 px-2"
      >
        <ul className="gap flex h-screen flex-col items-center gap-24 ">
          <Link href="/">
            <li
              onClick={() => linkPageHandler()}
              className="w-44 cursor-pointer"
            >
              <img src="/images/logo1.png" alt="" />
            </li>
          </Link>
          <Link href="/">
            <li onClick={() => linkPageHandler()} className="cursor-pointer">
              Home
            </li>
          </Link>
          <Link href="/furnitures">
            <li
              onClick={() => linkPageHandler(true)}
              className="cursor-pointer"
            >
              Furnitures
            </li>
          </Link>
          <Link href="/about">
            <li onClick={() => linkPageHandler()} className="cursor-pointer">
              About Us
            </li>
          </Link>
        </ul>
      </motion.div>
    </div>
  );
};

export default NavPanel;
