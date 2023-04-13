import { useStateContext } from "@/context/StateContext";
//components
import Cart from "./Cart";
import NavPanel from "./NavPanel";
//next
import Image from "next/image";
import Link from "next/link";
//hooks
import useWindowSize from "@/hooks/useWindowSize";
//react-icons
import { BsCart3 } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const {
    showCart,
    setShowCart,
    totalQuantities,
    setActiveFilter,
    navPanActive,
    setNavPanActive,
  } = useStateContext();
  const size = useWindowSize();
  const tabletPort = size.width > 976;

  return (
    <div className="fixed top-0 z-30 w-full select-none bg-[#f8f8f8] ">
      <nav className="relative mx-auto flex h-14 max-w-[72rem] items-center justify-between  px-4 text-main-color ">
        {!tabletPort ? (
          <span
            onClick={() => setNavPanActive((prevState) => !prevState)}
            className="absolute z-30 cursor-pointer"
          >
            {!navPanActive ? <GrMenu /> : <RiCloseFill className="text-xl" />}
          </span>
        ) : (
          ""
        )}
        {!tabletPort && <div></div>}
        <div>
          {navPanActive && !tabletPort && <NavPanel />}
          <ul className="relative flex  items-center justify-between gap-2  ">
            <Link href="/">
              <li className="ml-12 mr-8 lg:ml-0">
                <Image
                  src="/images/logo1.png"
                  alt=""
                  width={150}
                  height={60}
                  className="cursor-pointer"
                />
              </li>
            </Link>
            {tabletPort ? (
              <>
                <Link href="/">
                  <li className="cursor-pointer rounded-lg px-4 py-2 duration-700 hover:bg-gray-200">
                    Home
                  </li>
                </Link>
                <Link href="/furnitures">
                  <li
                    onClick={() => setActiveFilter("All")}
                    className="cursor-pointer rounded-lg px-4 py-2 duration-700 hover:bg-gray-200"
                  >
                    Furnitures
                  </li>
                </Link>
                <Link href="/about">
                  <li className="cursor-pointer rounded-lg px-4 py-2 duration-700 hover:bg-gray-200">
                    About Us
                  </li>
                </Link>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>

        <div>
          <button
            onClick={() => setShowCart(true)}
            className="relative text-xl  "
          >
            <BsCart3 />
            <span className="absolute -right-2 -top-2 h-4 w-4 rounded-lg bg-main-color text-center text-xs font-semibold text-white">
              {totalQuantities}
            </span>
          </button>
        </div>

        {showCart && <Cart />}
      </nav>
    </div>
  );
};

export default Navbar;
