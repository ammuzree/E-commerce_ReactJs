import "./style/shop.css";

export const Produ = (props) => {
  const { id, prductName, price, prImg } = props.data;
  return (
    <>
      <>
        <div className="col img-col">
          <div className="img-bdy">
            <div className="shp-img">
              <img
                src={prImg}
                alt="bag 1"
                style={{ width: "16rem", height: " 16rem" }}
              />
            </div>
            <div className="shp-detl d-flex justify-content-around align-items-center my-2">
              <span className="prName">
                Name: <span className="prNm">{prductName}</span>
              </span>
              <span className="prPrice">
                Price: <span className="prVal"> ₹ {price}</span>
              </span>
            </div>
            <div className="cart-btn my-3">
              <button className="btn btn-secondary">Add to cart</button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
