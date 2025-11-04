import Image from "next/image";
import Banner from "./components/banner/page";
import Categories from "./components/categories/page";
import Products from "./components/products/page";
import Service from "./components/services/page";
import MobilePage from "./components/mobile/page";
import Listening from "./components/listening/page";
import FAQPage from "./components/faq/page";

export default function Home() {
  return (
    <div>
     <Banner/>
     <Categories/>
     <Products/>
     <Service/>
     <MobilePage/>
     <Listening/>
     <FAQPage/>
    </div>
  );
}
