import CategoryList from "../components/CategoryList";
import HeroSlider from "../components/HeroSlider";
import BestSelling from "../components/BestSelling";
import BrandStory from "../components/BrandStory";
import ProductGrid from "../components/ProductGrid";
import NewArrivals from "../components/NewArrivals";
import BestSellersCarousel from "../components/BestSellersCarousel";
import ShoeCare from "../components/ShoeCare";
import WhyZenstock from "../components/WhyZenstock";
import BrandReviews from "../components/BrandReviews";
import Footer from "../components/Footer";
import "../styles/sections.css";

export default function Home() {
  return (
    <>

      <CategoryList />
      <HeroSlider />
      <BestSelling />
      <NewArrivals />
      <BestSellersCarousel />
      <ProductGrid />
      <BrandStory />
      <WhyZenstock />
      <ShoeCare />
      <BrandReviews />
      <Footer />

    </>
  );
}