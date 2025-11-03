import Image from "next/image";
import Banner from "./components/banner/page";
import Categories from "./categories/page";
import Products from "./products/page";

export default function Home() {
  return (
    <div>
     <Banner/>
     <Categories/>
     <Products/>
    </div>
  );
}
