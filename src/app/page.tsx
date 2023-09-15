import HomeNav from "@/components/HomeNav";
import About from "./home/About";
import Category from "./home/Category";
import FeaturedCollection from "./home/FeaturedCollection";
import Hero from "./home/Hero";
import ProductList from "./home/ProductList";
import Testimonial from "./home/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HomeNav />
      <Hero />
      <Category />
      <About />
      <ProductList />
      <FeaturedCollection />
      <Testimonial />
      <Footer />
    </>
  )
}
