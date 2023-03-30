import { useStateContext } from "@/context/StateContext";
//next
import Link from "next/link";
const FooterBanner = () => {
  const { setActiveFilter } = useStateContext();
  return (
    <div className="mt-20 bg-main-color">
      <div className="mx-auto flex min-h-[30rem] max-w-[72rem] flex-col gap-7 p-5 text-text-main md:items-center lg:flex-row">
        <div className="order-2 flex flex-1 flex-col gap-5 lg:order-1 lg:w-1/2">
          <h1 className="w-full text-center md:text-3xl lg:text-start xl:text-5xl">
            For a limited time, you can save 40% on selected furniture pieces!
            Don't miss out!
          </h1>
          <h3 className="text-center text-xs text-gray-500 lg:text-start">
            Receive an extra 5% cashback when you make payments through Stripe!
          </h3>
          <Link href="/furnitures">
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => setActiveFilter("All")}
                className="w-full items-center self-start rounded-xl border-2 border-text-main bg-text-main py-4 px-8 text-center text-main-color duration-500 hover:bg-main-color hover:text-text-main sm:w-auto md:items-start"
              >
                Learn more
              </button>
            </div>
          </Link>
        </div>
        <div className="order-1 flex-1 overflow-hidden rounded-3xl lg:order-2 lg:w-1/2">
          <img
            src="/images/h5.jpg"
            className="h-full w-full rounded-3xl duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
