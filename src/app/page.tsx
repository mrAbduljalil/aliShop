'use client'
import Header from "@/layout/header";
import Products from "./products/page";
import Footer from "@/layout/footer";
import Banner from "@/components/banner";
import Link from "next/link";



const Home = () => {
  return <div>
    <Header />
  
    <Link href='https://alifshop.uz/uz/events/INFINIX-yangilik'><Banner imageUrl="/images/banner.png" altText="Banner" width={1250} height={400}/> </Link>
    
     <Products />
    <Footer/>
  </div>;
};

export default Home;
