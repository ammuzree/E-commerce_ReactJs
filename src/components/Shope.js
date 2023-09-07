import React, { useState } from "react";
import "./style/shop.css";
import img1 from "./cottonBag/images (1).jpg";
import img2 from "./cottonBag/images 10.jpg";
import img3 from "./cottonBag/images 3.jpg";
import img4 from "./cottonBag/images 5.jpg";
import img5 from "./cottonBag/images 6.jpg";
import img8 from "./shop/travel2.jpg";
import img9 from "./shop/travel3.jpg";
import img10 from "./shop/travel4.jpg";
import img11 from "./shop/travel5.jpg";
import img14 from "./shop/jute4.jpg";
import img15 from "./shop/jute5.jpg";
import img16 from "./shop/jute6.jpg";
import img17 from "./shop/jute7.jpg";
import tote1 from "./shop/tote1.jpg";
import tote2 from "./shop/tote2.jpg";
import tote3 from "./shop/tote3.jpg";
import beach1 from "./shop/beach11.jpg";
import beach2 from "./shop/beach12.jpg";
import beach3 from "./shop/beach3.jpg";
import beach5 from "./shop/beach5.jpg";
import beach6 from "./shop/beach13.jpg";
import travel1 from "./shop/travel11.jpg";

export default function Shope() {
  const [cart, setCart] = useState("Add to cart");
  const Products = [
    {
      id: 1,
      prductName: "Tote1",
      price: "999.0",
      prImg: img1,
    },
    {
      id: 2,
      prductName: "cotton",
      price: "599.0",
      prImg: img2,
    },
    {
      id: 3,
      prductName: "cotton",
      price: "699.0",
      prImg: img3,
    },
    {
      id: 4,
      prductName: "beach",
      price: "1,500",
      prImg: beach5,
    },
    {
      id: 5,
      prductName: "tote",
      price: "1,699",
      prImg: tote3,
    },
    {
      id: 6,
      prductName: "beach",
      price: "2500.0",
      prImg: beach6,
    },
    {
      id: 7,
      prductName: "travel",
      price: "5,000",
      prImg: img9,
    },
    {
      id: 8,
      prductName: "tote",
      price: "995.50",
      prImg: img17,
    },
    {
      id: 9,
      prductName: "jute",
      price: "999.0",
      prImg: img16,
    },
    {
      id: 10,
      prductName: "cotton",
      price: "599.0",
      prImg: img4,
    },

    {
      id: 11,
      prductName: "beach",
      price: "3,599",
      prImg: beach3,
    },
    {
      id: 12,
      prductName: "tote",
      price: "999.50",
      prImg: tote1,
    },
    {
      id: 13,
      prductName: "beach",
      price: "5,999",
      prImg: beach1,
    },

    {
      id: 14,
      prductName: "travel",
      price: "10,000",
      prImg: img10,
    },

    {
      id: 15,
      prductName: "tote",
      price: "999.50",
      prImg: img15,
    },
    {
      id: 16,
      prductName: "travel",
      price: "15,000",
      prImg: img11,
    },
    {
      id: 17,
      prductName: "jute",
      price: "999.1",
      prImg: img14,
    },
    {
      id: 18,
      prductName: "travel",
      price: "9,999.10",
      prImg: travel1,
    },
    {
      id: 19,
      prductName: "tote",
      price: "999.80",
      prImg: tote2,
    },

    {
      id: 20,
      prductName: "jute",
      price: "799.50",
      prImg: img5,
    },

    {
      id: 21,
      prductName: "beach",
      price: "900.90",
      prImg: beach2,
    },
  ];
  return (
    <>
      <div className="shp-head d-flex align-items-center justify-content-center">
        <h2>Shop</h2>
      </div>
      <div className="shp-hr mx-3">
        <hr />
      </div>
      <div className="shp-bdy justify-content-center  align-items-center text-center">
        <div className="shp-srch ">
          {/* <div className="shp-inp my-4 p-5">
            <label htmlFor="srch-shp">
              Category
              <br />
              <input type="text" id="srch-shp" />
            </label>
          </div> */}
          <div className="shpImg-bdy ">
            <div className="shp-imgCont container p-4">
              <h2 className="shpHd">All Categories</h2>

              <div className="row shp-prod">
                {Products.map((val) => (
                  <>
                    <div className="col img-col">
                      <div className="img-bdy">
                        <div className="shp-img">
                          <img
                            src={val.prImg}
                            alt="bag 1"
                            style={{ width: "16rem", height: " 16rem" }}
                          />
                        </div>
                        <div className="shp-detl d-flex justify-content-around align-items-center my-2">
                          <span className="prName">
                            Name: <span className="prNm">{val.prductName}</span>
                          </span>
                          <span className="prPrice">
                            Price: <span className="prVal"> ₹ {val.price}</span>
                          </span>
                        </div>
                        <div className="cart-btn my-3">
                          <button className="btn btn-secondary">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shp-hr mx-3">
        <hr />
      </div>
    </>
  );
}
