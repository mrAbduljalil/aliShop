'use client'
import { SlBasket } from "react-icons/sl";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import './../../styles/header.css'
import { useState } from "react";
import Modal from "./modal";
import Login from "@/components/login";
import Link from "next/link";


const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const[isLoginModal, setLoginModal] =useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
const loginModal = () =>{
  setLoginModal(!isLoginModal);
}
  return (
  <header>
    <nav>
      <div className="container">
        <div className="headers">
          <div className="navbar">          
           <a href="/"><img className="logotip" src="https://alifshop.uz/_ipx/s_113x32/images/alifshop-logo.svg" alt="logotip" /></a>

            <button className="katalogBtn" onClick={toggleModal}><GiHamburgerMenu />Catalog of goods</button>

            <div className="search">
              <input type="text" placeholder="Search for goods"/>
              <button className="searchBtn"><FaSearch/></button>
            </div>

            <div className="product_store">
              <Link href={'/cart'}>
              <div className="stored">
               <SlBasket />
                <span>Basket</span>
              </div>
              </Link>

              <Link href={'/favorites'}>
              <div className="stored">
                <MdOutlineFavoriteBorder />
                <span>Qualified</span>
              </div>
              </Link>
            </div>

            <button className="LogIn" onClick={loginModal}>Enter</button>
 
             <div className="league">
              <button className="rus">RUS /</button>
              <br />
              <button className="uzb">UZB</button>
             </div>
          </div>
        </div>
      </div>
    </nav>
    <hr />

    <ul className="menu">
      <a className="menu-link" href="https://alifshop.uz/uz/categories/smartfoni-i-gadzheti"><li>Smartphones and gadgets</li></a>
      <a className="menu-link" href="https://alifshop.uz/uz/categories/noutbuki-i-kompjyuteri"><li>Laptops,computers</li></a>
      <a className="menu-link" href="https://alifshop.uz/uz/categories/tv-i-proektori"><li>TV and projectors</li></a>
      <a className="menu-link" href="https://alifshop.uz/uz/categories/audiotehnika"><li>Audio equipment</li></a>
      <a className="menu-link" href="https://alifshop.uz/uz/categories/tehnika-dlya-doma"><li>Appliances for the home</li></a>
      <a className="menu-link" href="https://alifshop.uz/uz/categories/tehnika-dlya-kuhni"><li>Appliances for the kitchen</li></a>
      <a className="menu-link" href="https://alifshop.uz/uz/categories/krasota-i-zdorovje"><li>Beauty and health</li></a>
    </ul>

    <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    <Login isLoginModal={isLoginModal} loginModal={loginModal} />
  </header>
  
  )
};

export default Header;
