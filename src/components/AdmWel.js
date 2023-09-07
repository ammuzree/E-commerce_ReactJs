import { Link } from "react-router-dom";
import "./style/Dash.css";
export default function Dhash() {
  return (
    <>
      <div className="dash-hr mx-2">
        <hr />
      </div>
      <div className="wel-body">
        <div className="wel-txt mx-2 d-flex justify-content-around text-center align-items-center">
          <h1>Wellcome All!</h1>
          <Link to="/admin">Logout</Link>
        </div>
      </div>
      <div className="dash-hr mx-2">
        <hr />
      </div>
    </>
  );
}
