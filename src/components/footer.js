import React from "react";
// import { BsFacebook } from "react-icons/bs";
import { BsInstagram, BsYoutube, BsFacebook, BsTwitter } from "react-icons/bs";
import "./style/footer.css";

export default function Footer() {
  let urlF = "https://www.facebook.com/",
    urlI = "https://www.instagram.com/",
    urlY = "https://www.youtube.com/",
    urlT = "https://www.twitter.com/";
  return (
    <>
      <div className="footer-body d-flex justify-content-around align-items-center">
        <div className="text-ftr">
          <h3 className="footer-txt">
            © 2023 AAHA Solutions . All Rights Reserved
          </h3>
        </div>
        <div className="icons-ftr">
          <ul className="icon-list d-flex justify-content-around align-items-center m-0">
            <li className="li-ftr">
              <a href={urlF} id="a-foot">
                <BsFacebook />
              </a>
            </li>
            <li className="li-ftr">
              <a href={urlI} id="a-foot">
                <BsInstagram />
              </a>
            </li>
            <li className="li-ftr">
              <a href={urlY} id="a-foot">
                <BsYoutube />
              </a>
            </li>
            <li className="li-ftr">
              <a href={urlT} id="a-foot">
                <BsTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
