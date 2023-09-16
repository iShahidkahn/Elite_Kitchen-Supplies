import HomeNav from "@/components/HomeNav";
import About from "./home/About";
import Category from "./home/Category";
import FeaturedCollection from "./home/FeaturedCollection";
import Hero from "./home/Hero";
import ProductList from "./home/ProductList";
import Testimonial from "./home/Testimonial";
import Footer from "@/components/Footer";
import SingleOffer from "@/components/SingleOffer";
import Newsletter from "@/components/Newsletter";

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
      <SingleOffer />
      <Newsletter />
      <Footer />
    </>
  )
}
