import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/contact.css";
import contactImg from "./images/contact 2.jpg";

export default function Contact() {
  const navi = useNavigate();
  const [inpVal, setInputVal] = useState({});
  const [erMsg, setErmsg] = useState({
    erName: "",
    erEmail: "",
    erNum: "",
  });

  const Validation = () => {
    let isValid = true;
    let newErrors = {};
    var namePattern = /^[a-zA-Z ]+$/;
    var mailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    var numPatern = /[0-9]/;

    if (!inpVal.contName) {
      newErrors.erName = "Fill the required";
      isValid = false;
    } else if (!namePattern.test(inpVal.contName)) {
      newErrors.erName = "Enter the name";
      isValid = false;
    }
    if (!inpVal.contEmail) {
      newErrors.erEmail = "Enter the E-mail";
      isValid = false;
    } else if (!mailPattern.test(inpVal.contEmail)) {
      newErrors.erEmail = "Enter the correct E-mail";
      isValid = false;
    }

    if (!inpVal.contNumber) {
      newErrors.erNum = "Enter the Phone number";
      isValid = false;
    } else if (!numPatern.test(inpVal.contNumber)) {
      newErrors.erNum = "Enter the Number only";
      isValid = false;
    }

    setErmsg(newErrors);

    return isValid;
  };

  const handelChanges = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInputVal((val) => ({ ...val, [name]: value }));
  };

  const handelSubmit = (e) => {
    if (!Validation()) {
      e.preventDefault();
    } else {
      console.log("form data", inpVal);
      setInputVal("");
      alert("Thnak you for contacting us!");
      navi("/");
    }
  };

  return (
    <>
      <div className="contact-body">
        <div className="cont-head text-center">
          <h3>Contact us</h3>
        </div>
        <div className="cont-div">
          <div className="cont-container my-5 container p-5  d-flex justify-content-around align-item-center">
            <div className="form-content  d-flex align-items-center justify-content-center ">
              <form
                className="cont-form"
                method="post"
                onSubmit={handelSubmit}
                noValidate
              >
                <div className="input-grp">
                  <input
                    type="text"
                    className="cont-input"
                    autoComplete="off"
                    name="contName"
                    value={inpVal.contName || ""}
                    onChange={handelChanges}
                    required
                  />
                  <label className="inp-label">Name*</label>
                </div>
                {erMsg.erName && (
                  <span className="error-cont">{erMsg.erName}</span>
                )}
                <br />
                <br />
                <div className="input-grp">
                  <input
                    type="text"
                    className=" cont-input"
                    autoComplete="off"
                    name="contEmail"
                    value={inpVal.contEmail || ""}
                    onChange={handelChanges}
                    required
                  />
                  <label className="inp-label">Email*</label>
                </div>
                {erMsg.erEmail && (
                  <span className="error-cont">{erMsg.erEmail}</span>
                )}
                <br />
                <br />
                <div className="input-grp">
                  <input
                    type="text"
                    className=" cont-input"
                    autoComplete="off"
                    name="contNumber"
                    SS
                    value={inpVal.contNumber || ""}
                    onChange={handelChanges}
                    required
                  />
                  <label className="inp-label">Phone number*</label>
                </div>
                {erMsg.erNum && (
                  <span className="error-cont">{erMsg.erNum}</span>
                )}
                <br />
                <br />
                <div className="input-grp">
                  <textarea
                    type="text"
                    className=" cont-input"
                    autoComplete="off"
                    name="contMsg"
                    value={inpVal.contMsg || ""}
                    onChange={handelChanges}
                    rows={3}
                    cols={23}
                    required
                  />
                  <label className="inp-label">Message</label>
                </div>
                <br />
                <button className="contFrm-btn btn btn-secondary">
                  Send a message
                </button>
              </form>
            </div>
            <div className="cont-img  d-flex text-center align-items-center">
              <img
                className="img-contecting"
                src={contactImg}
                alt="Contact image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
