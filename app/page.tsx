import About from "@/components/landing_page/About";
import Category from "@/components/landing_page/Category";
import FeaturedCollection from "@/components/landing_page/FeaturedCollection";
import Hero from "@/components/landing_page/Hero";
import ProductList from "@/components/landing_page/ProductList";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="wrapper">
        <Category /> 
      </div>
      <About />
      <div className="wrapper">
        <ProductList/>
      </div>
      <FeaturedCollection />
    </>
  )
}
