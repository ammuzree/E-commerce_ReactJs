import React from "react";
import { useNavigate } from "react-router-dom";
import home from "./images/home.jpg";
import beach from "./images/beach bg1.jpg";
import tote from "./images/tote bg1.jpg";
import jute from "./images/jute bg1.jpg";
import cotton from "./images/cotton bg1.jpg";
import travel from "./images/travel bg 1.jpg";
import "./style/Home.css";

export default function Home() {
  const ShopBtn = useNavigate();
  return (
    <>
      <div className="home-cont">
        <div className="hom-img part-1">
          {/* <img src={home} alt="Home image"/> */}
          <article
            className="hom-img"
            style={{ backgroundImage: `url(${home})` }}
          >
            <div className="img-cont">
              <h1 className="img-head">Enjoy Your Shopee.</h1>
              <h3 className="img-sub">It's all what you select.</h3>
              <button
                className="img-btn btn btn-light"
                onClick={() => {
                  ShopBtn("/shope");
                }}
              >
                Shop now
              </button>
            </div>
          </article>
        </div>
        {/* make hr line */}
        <div className="hr mx-4">
          <hr />
        </div>
        {/* to make part 2 */}
        <div className="part-2 m-3">
          <div className="types text-center py-4">
            <h2>Types of Bages</h2>
          </div>
          <div className="catogorey container text-center">
            <div className="row">
              <div className="col my-4">
                <h3>Cotton Bag</h3>
                <div className="p2-img1">
                  <img
                    id="card-home"
                    src={cotton}
                    alt="Cotton Bag"
                    style={{ width: "18rem" }}
                  />
                </div>
              </div>
              <div className="col my-4">
                <h3>Tote Bag</h3>
                <div className="p2-img2">
                  <img
                    id="card-home"
                    src={tote}
                    alt="Jute Bag"
                    style={{ width: "18rem" }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col my-4 ">
                <h3>Beach Bag</h3>
                <div className="p2-img3">
                  <img
                    id="card-home"
                    src={beach}
                    alt="Beach Bag"
                    style={{ width: "18rem" }}
                  />
                </div>
              </div>
              <div className="col my-4">
                <h3>Jute Bag</h3>
                <div className="p2-img4">
                  <img
                    id="card-home"
                    src={jute}
                    alt="Jute Bag"
                    style={{ width: "18rem" }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col my-4">
                <h3>Travel Bag</h3>
                <div className="p2-img5">
                  <img
                    id="card-home"
                    src={travel}
                    alt="Travel Bag"
                    style={{ width: "18rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* to make part3 */}
      </div>
      <div className="end-hr mx-4">
        <hr />
      </div>
    </>
  );
}
