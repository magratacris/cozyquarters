//sanity
import { client } from "@/lib/client";
//components
import Hero from "@/components/homepage/Hero";
import Categories from "@/components/homepage/Categories";
import FooterBanner from "@/components/homepage/FooterBanner";
import BestSeller from "@/components/homepage/BestSeller";
import Featured from "@/components/homepage/Featured";

export default function Home({ categories, allProducts, banner }) {
  const bestSeller = allProducts.filter((item) =>
    item.filters.includes("best-seller")
  );
  const featured = allProducts.filter((item) =>
    item.filters.includes("featured")
  );

  return (
    <div>
      <Hero banner={banner[0]} />
      <Categories categories={categories} allProducts={allProducts} />
      <Featured featured={featured} />
      <BestSeller bestSeller={bestSeller} />
      <FooterBanner />
    </div>
  );
}
//data fetching
export const getServerSideProps = async () => {
  //all products
  const allProductsQuery = '*[_type == "product" ]';
  const allProducts = await client.fetch(allProductsQuery);
  //categories
  const queryCategories = '*[_type == "categories" ]';
  const categories = await client.fetch(queryCategories);
  //Banner
  const queryBanner = '*[_type == "banner" ]';
  const banner = await client.fetch(queryBanner);
  return {
    props: { categories, allProducts, banner },
  };
};
