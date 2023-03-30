import React, { useRef } from "react";
import { useStateContext } from "../context/StateContext";
//next
import Link from "next/link";
//react-hot-toast
import toast from "react-hot-toast";
//sanity
import { urlFor } from "../lib/client";
import getStripe from "@/lib/getStripe";
//react-icons
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft } from "react-icons/ai";
import { TbShoppingCartX } from "react-icons/tb";
//useanimations
import UseAnimations from "react-useanimations";
import trash from "react-useanimations/lib/trash";
//framer-motion
import { motion } from "framer-motion";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;
    const data = await response.json();

    toast.loading("Redirecting");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div
      ref={cartRef}
      className="fixed right-0 top-0 z-30 w-screen  bg-black/50 transition-all duration-1000 ease-in-out"
    >
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0%" }}
        className="relative float-right h-screen w-[90%] bg-white py-10 px-2 xl:w-[40%]"
      >
        <button
          type="button"
          id="cart-heading"
          onClick={() => setShowCart(false)}
          className="ml-2 flex items-center gap-1 border-none bg-transparent font-medium"
        >
          <AiOutlineLeft />
          <span className="ml-2 text-sm md:text-base">Your Cart</span>
          <span className="ml-2 text-sm text-main-color md:text-base">
            ({totalQuantities} items)
          </span>
        </button>
        {cartItems.length < 1 && (
          <div className="m-8 flex flex-col items-center">
            <TbShoppingCartX size={150} />
            <h3 className="text-center font-medium md:text-start ">
              Your shopping bag is empty
            </h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="mt-10 w-full max-w-[25rem] rounded-2xl border-none bg-main-color p-4  text-sm text-text-main duration-500 hover:scale-105 md:text-base
                "
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className="mt-4 h-[80%] overflow-x-hidden  md:py-5 md:px-4">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div
                key={item._id}
                className="flex h-40 w-full gap-2  md:gap-8 md:p-6"
              >
                <div className="h-14 w-14 md:h-28 md:w-28">
                  <img
                    src={urlFor(item?.image[0])}
                    className="h-full w-full rounded-xl bg-[#f8f8f8] "
                  />
                </div>

                <div className="mr-3 w-40 flex-1 flex-col justify-between">
                  <div className="mb-6 flex  justify-between text-main-color">
                    <h5 className="text-xs md:text-sm">{item.name}</h5>
                    <h4 className="text-xs md:text-sm">${item.price}</h4>
                  </div>
                  <div className="flex w-full justify-between text-main-color">
                    <div>
                      <p className="mt-2 flex select-none items-center border-2 border-main-color ">
                        <span
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                          className="cursor-pointer border-r-2 border-main-color p-1 py-2 px-2 text-[#f02d34] md:py-3 md:px-3"
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="cursor-pointer border-r-2  border-main-color p-1 px-2 md:py-2 md:px-3">
                          {item.quantity}
                        </span>
                        <span
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                          className="cursor-pointer  px-2 py-2 text-green-300 md:py-2 md:px-3"
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item)}
                      className=""
                    >
                      <UseAnimations animation={trash} size={36} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="absolute bottom-3 right-1 w-full p-2 px-4 ">
            <div className="flex justify-between text-sm md:text-base">
              <h3 className="">Subtotal:</h3>
              <h3>{`$${parseFloat(totalPrice.toFixed(2))}`}</h3>
            </div>
            <div className="w- mx-auto w-full">
              <button
                type="button"
                onClick={handleCheckout}
                className="mt-5 w-full   rounded-2xl border-2  border-main-color  bg-main-color  p-4 text-xs  text-text-main duration-500 hover:bg-text-main hover:text-main-color active:bg-main-color active:text-text-main md:mt-10 md:text-base
                "
              >
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;
