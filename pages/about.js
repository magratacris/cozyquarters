import React from "react";
//framer-motion
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="mx-auto flex min-h-[40rem] max-w-[65rem] flex-col p-8"
    >
      <h1 className="mx-auto whitespace-nowrap py-4 text-2xl">About Us</h1>
      <p className="text-sm">
        Welcome to my fully functional e-commerce website! This website is a
        personal project created to showcase my web development skills and to
        demonstrate my ability to build a responsive, dynamic, and user-friendly
        website.
      </p>
      <p className="mt-4 text-sm">
        On this website, you can browse through a wide range of home decor and
        furniture products. It offers everything from beds and mattresses to
        kitchenware and decorative accessories, all at affordable prices. My
        website features a modern and minimalist design that is easy to
        navigate, ensuring a smooth and hassle-free shopping experience for my
        customers. You can easily filter products by category and add items to
        your cart with just a few clicks.
      </p>
      <p className="mt-4 rounded-2xl bg-main-color p-4 text-sm text-text-main">
        At checkout, you can securely and conveniently pay for your purchases
        using Stripe. You can TRY it out! Since this is a demo, just put “4242
        4242 …..” on all inputs in card information section and you&apos;re good
        to go!
      </p>
      <p className="mt-4 text-sm italic">
        Disclaimer: Please note that all product photos used on this website
        belong to Ikea.com and are used for demonstration purposes only. I do
        not claim ownership of these photos and I&apos;m not affiliated with
        Ikea in any way.
      </p>
      <div className="mt-7 flex items-center justify-center">
        <img src="/images/logo1.png" alt="" width={250} />
      </div>
    </motion.div>
  );
};

export default About;
