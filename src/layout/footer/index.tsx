import React from "react";
import '../../styles/footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer_first">
        <div className="first_child">
          <p>Documents</p>
          <a href=""><span>General conditions for sale</span></a>
          <a href=""><span>Archive of offers</span></a>
          <a href=""><span>Regulation</span></a>
          <a href=""><span>Testimony</span></a>
        </div>

        <div className="second_child">
          <p>Service</p>
          <span>Prayer time</span>
          <span>Installment payment in Islam</span>
          <span>sell at alif shop!</span>
          <span>Repetition</span>
        </div>

        <div className="third_child">
          <p>Smartphones and phones</p>
          <span>Gadgets</span>
          <span>Accessories for smartphones</span>
          <span>Related goods</span>
          <span>Watches and accessories</span>
        </div>

        <div className="fourt_child">
          <p>We are on social media</p>
          <div className="site">
            <img src="https://alifshop.uz/_ipx/s_40x40/images/media/instagram.webp" alt="instagram" />
            <img src="https://alifshop.uz/_ipx/s_40x40/images/media/facebook.svg" alt="facebook" />
            <img src="https://alifshop.uz/_ipx/s_40x40/images/media/telegram.svg" alt="telegram" />
            <img src="https://alifshop.uz/_ipx/s_40x40/images/media/ok.svg" alt="OK" />
            <img src="https://alifshop.uz/_ipx/s_40x40/images/media/tiktok.svg" alt="tiktok" />
          </div>
           
            <p>Information service</p>
          <a href=""><h1 className="call">@alifshop_uz ></h1></a>
          <a href=""><h1 className="call">+998 555 12 12 12 ></h1></a>

        </div>
      </div>
      <hr />
      <div className="footer_second">
        <div className="footer-end">
          <p>2024 © alifshop.uz</p>
          <img src="https://yandex.ru/cycounter?https://alifshop.uz&theme=dark&lang=ru" alt="yandex" />
        </div>
      </div>
    </footer>
  )
 
};

export default Footer;
