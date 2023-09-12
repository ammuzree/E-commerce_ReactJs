import React, { useState } from "react";
import { Products } from "./Products";
import { Produ } from "./product";

import "./style/shop.css";

export default function Shope() {
  // const [cart, setCart] = useState("Add to cart");

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
          <div className="shpImg-bdy ">
            <div className="shp-imgCont container p-4">
              <h2 className="shpHd py-2">All Categories</h2>
            </div>
            <div className="shopee">
              <div className="row shp-prod">
                {Products.map((Prdct) => (
                  <Produ data={Prdct} />
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
