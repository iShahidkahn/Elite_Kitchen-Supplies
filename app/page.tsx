import BookUS from "@/components/constants/BookMeeting";
import JoinUs from "@/components/constants/JoinUs";
import About from "@/components/landing_page/About";
import Category from "@/components/landing_page/Category";
import CustomerReview from "@/components/landing_page/CustomerReview";
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
        <ProductList />
      </div>
      <FeaturedCollection />
      <div className="wrapper">
        <CustomerReview />
        <BookUS />
        <JoinUs />
      </div>
    </>
  )
}
