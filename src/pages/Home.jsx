import CategoryList from "../components/CategoryList";
import HeroSlider from "../components/HeroSlider";
import BestSelling from "../components/BestSelling";
import "../styles/sections.css";
import BrandStory from "../components/BrandStory";
import ProductGrid from "../components/ProductGrid";
import NewArrivals from "../components/NewArrivals";
import BestSellersCarousel from "../components/BestSellersCarousel";

export default function Home() {
  return (
    <>
      <CategoryList />
      <HeroSlider />
      <BestSelling/>
      <BrandStory/>
      <ProductGrid/>
      <NewArrivals/>
      <BestSellersCarousel/>
      
    </>
  );
}