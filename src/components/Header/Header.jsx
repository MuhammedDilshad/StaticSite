import React from "react";
import Discription from "../Discription/Discription";
import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <div>
        <img className="Banner" src="/images/Frame 6.png" alt="" />
      </div>
      <div className="Body">
        <div className="BodyLeft">
          <div className="Logo">
            <img className="Icon" src="/images/Vector.png" alt="" />
            <h1 className="Premium">Premium</h1>
          </div>
          <div className="MainInfo">
            <div>
              <div className="Title">NUTAN GLASS HOUSE</div>
              <div className="SubTitle">
                Real Estate Developer (20-50 Projects Delivered)
              </div>
            </div>
            <div className="Address">
              <img className="Vector" src="/images/Vector (2).png" alt="" />
              <p className="vectorAd">Pune</p>
            </div>
            <div className="Icons">
              <img src="/images/XMLID_1_.png" alt="" />
              <img src="/images/Group.png" alt="" />
              <img src="/images/XMLID_1_ (1).png" alt="" />
              <img src="/images/Group (1).png" alt="" />
              <div className="Buttons">
                <button className="Btn">Send Enqiury</button>
                <button className="Btn">Save</button>
              </div>
            </div>
          </div>
          <Discription />
        </div>
      </div>
    </div>
  );
}

export default Header;
