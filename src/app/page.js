import Image from "next/image";
import Banner from "./components/banner/page";
import Categories from "./categories/page";

export default function Home() {
  return (
    <div className=" ">
     <Banner/>
     <Categories/>
    </div>
  );
}
