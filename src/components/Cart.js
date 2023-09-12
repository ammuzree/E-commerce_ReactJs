import "./style/Cart.css";

export default function Cart() {
  return (
    <>
      <div className="cart-head  d-flex justify-content-center align-items-center">
        <h3 className="cart-Hd">Cart</h3>
      </div>
      <div className="cart-hr mx-3">
        <hr />
      </div>
      <div className="cart-bdy d-flex justify-content-center align-items-center">
        <div className="items">
          <h2 className="itm-cart">No items found....</h2>
        </div>
      </div>
      <div className="cart-hr mx-3">
        <hr />
      </div>
    </>
  );
}
