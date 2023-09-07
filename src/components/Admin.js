import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/Admin.css";

export default function Admin() {
  const DashPath = useNavigate();
  const [form, setForm] = useState({});
  const [err, setErr] = useState({
    unErr: "",
    passErr: "",
  });

  const handelOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((val) => ({ ...val, [name]: value }));
  };

  const validation = () => {
    let isState = true;
    let newErr = {};

    if (!form.lgnEmail) {
      isState = false;
      newErr.unErr = "Enter the UserName!";
    }
    if (!form.lgnPass) {
      isState = false;
      newErr.passErr = "Enter the password!";
    }

    setErr(newErr);

    return isState;
  };

  const lgnFormSub = (e) => {
    if (!validation()) {
      e.preventDefault();
    } else {
      console.log("login details: ", form);
      DashPath("/dash");
    }
  };

  return (
    <>
      <div className="adm-hr mx-2">
        <hr />
      </div>
      <div className="adm-body m-2 d-flex justify-content-center text-center align-items-center">
        <div className="adm-card container">
          <div className="lgn-txt">
            <h4 className="lgn-head">Admin Login</h4>
            <span className="lgn-para">
              Enter yout details to get sign in to your account
            </span>
          </div>
          <div className="adm-frm">
            <form className="my-4" onSubmit={lgnFormSub} noValidate>
              <div className="lgn-grp">
                <input
                  type="text"
                  className="lgn-inp"
                  name="lgnEmail"
                  value={form.lgnEmail}
                  onChange={handelOnchange}
                  autoComplete="off"
                  required
                />
                <div className="lgn-label">Username</div>
              </div>
              {err.unErr && <span className="lgnErrmsg">{err.unErr}</span>}
              <br />
              <br />
              <div className="lgn-grp">
                <input
                  type="password"
                  className="lgn-inp"
                  required
                  name="lgnPass"
                  value={form.lgnPass}
                  onChange={handelOnchange}
                />
                <div className="lgn-label">Password</div>
              </div>
              {err.passErr && <span className="lgnErrmsg">{err.passErr}</span>}
              <br />
              <button className="btn lgn-btn">Login</button>
            </form>
          </div>
        </div>
      </div>
      <div className="adm-hr mx-2">
        <hr />
      </div>
    </>
  );
}
