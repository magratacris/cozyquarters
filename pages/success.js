import React, { useEffect } from "react";
import { useStateContext } from "../context/StateContext";
//next
import Link from "next/link";
//react-icons
import { BsBagCheckFill } from "react-icons/bs";
//lib
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div>
      <div
        transition={{ duration: 0.7 }}
        className="mx-auto mt-40 flex max-w-[62.5rem] flex-col  items-center justify-center rounded-2xl bg-main-color px-4 py-5 text-text-main md:px-12"
      >
        <p className="text-4xl text-green-500">
          <BsBagCheckFill />
        </p>
        <h2 className="mt-4 mb-4 text-center text-xl font-medium md:text-4xl">
          Thank you for your order!
        </h2>
        <p className="text-center text-lg font-semibold">
          Check your email inbox for the receipt.
        </p>
        <p
          id="info"
          className="m-3 mt-8 text-center text-sm font-semibold md:text-lg"
        >
          If you have any questions, please email cozyquarters@businessmail.com
        </p>
        <Link href="/">
          <button
            type="button"
            width="300px"
            className="mt-10 max-w-[18.75rem] scale-100 transform rounded-2xl border-none bg-text-main p-4 text-main-color  duration-500 hover:scale-105
                "
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
