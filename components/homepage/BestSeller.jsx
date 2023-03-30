//components
import Products from "./Products";
//react-marquee
import Marquee from "react-fast-marquee";

const BestSeller = ({ bestSeller }) => {
  const margin = "mx-5";
  const section = "bestSeller";
  return (
    <div className="mx-auto mt-16 max-w-[72rem] rounded-3xl  px-4 text-[#191919]">
      <h3 className=" mb-12 text-center  text-2xl md:text-4xl">Best Seller</h3>
      <Marquee
        pauseOnHover="true"
        speed={70}
        gradient={false}
        style={{
          display: "flex",
          width: "72rem",
          margin: "auto",
          marginTop: "1.25rem",
          justifyContent: "center",
        }}
      >
        {bestSeller.map((item) => (
          <Products
            key={item._id}
            product={item}
            margin={margin}
            section={section}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default BestSeller;
