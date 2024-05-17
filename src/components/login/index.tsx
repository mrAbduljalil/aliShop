import React from "react";
import '../login/login.css'
const Login = ({ isLoginModal, loginModal }: { isLoginModal: boolean, loginModal: () => void }) => {
  return(
  <div>
    <div className={isLoginModal ? "modal modal-open" : "modal"}>
      <div className="modal-content">
        <span className="close" onClick={loginModal}>&times;</span>
           <div className="login">
           <h1 className="title">Authorization alif shop</h1>
          <label htmlFor="">
            <input type="tel" id="" required placeholder="+998" />           
          </label>
           </div>
          <br />
           <div className="btns">
           <button className="continue">Continue</button>
            <button className="concellation">Concellation</button>
           </div>
      </div>
    </div>

  </div>
  )
};

export default Login;
