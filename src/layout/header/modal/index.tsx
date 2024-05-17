
import React from "react";
import '../modal/modal.css'
const Modal = ({ isModalOpen, toggleModal }: { isModalOpen: boolean, toggleModal: () => void }) => {
  return (
    <div className={isModalOpen ? "modal modal-open" : "modal"}>
      <div className="modal-contents">
        <span className="close" onClick={toggleModal}>&times;</span>
        <ul>
        <a href="https://alifshop.uz/uz/categories/smartfoni-i-gadzheti"><li className="menu-links">Smartphones and gadgets</li></a>
        <a  href="https://alifshop.uz/uz/categories/noutbuki-i-kompjyuteri"><li className="menu-links">Laptops,computers</li></a>
        <a  href="https://alifshop.uz/uz/categories/tv-i-proektori"><li className="menu-links">TV and projectors</li></a>
        <a  href="https://alifshop.uz/uz/categories/audiotehnika"><li className="menu-links">Audio equipment</li></a>
        <a href="https://alifshop.uz/uz/categories/tehnika-dlya-doma"><li className="menu-links">Appliances for the home</li></a>
        <a  href="https://alifshop.uz/uz/categories/tehnika-dlya-kuhni"><li className="menu-links">Appliances for the kitchen</li></a>
        <a  href="https://alifshop.uz/uz/categories/krasota-i-zdorovje"><li className="menu-links">Beauty and health</li></a>
        <a href="https://alifshop.uz/uz/categories/umniy-dom"><li className="menu-links">Smart home</li></a>
        <a href="https://alifshop.uz/uz/categories/tehnika-dlya-igr"><li className="menu-links">Game technique</li></a>
        <a href="lifshop.uz/uz/categories/sportivnie-tovari"><li className="menu-links">Sport tovarlari</li></a>
        <a href="https://alifshop.uz/uz/categories/avtotovari"><li className="menu-links">Auto goods</li></a>
        <a href="https://alifshop.uz/uz/categories/instrumenti-i-sadovaya-tehnika"><li className="menu-links">Tools and garden equipment</li></a>
        <a href="https://alifshop.uz/uz/categories/detskie-tovari"><li className="menu-links">Children`s items</li></a>
        <a href="https://alifshop.uz/uz/categories/stroiteljstvo-i-remont"><li className="menu-links">Construction and repair</li></a>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
