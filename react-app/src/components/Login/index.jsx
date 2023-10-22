import React from "react";
import "./login.css";
import { GrLogin } from "react-icons/gr";
import MainLogin from "./MainLogin";
import MainRegister from "./MainRegister";

const Login = ({ page, xPage }) => {
  return (
    <div style={{ width: "40rem" }} className="container mt-5 ">
      <div className="card text-center">
        <div className="card-header">
          <h5>Login</h5>
        </div>
        <div className="card-body">{page === "login" ? <MainLogin /> : <MainRegister />}</div>
        <div className="card-footer">
          {page === "login" ? "Belum memiliki akun silahkan" : "Sudah memiliki akun silahkan"}
          <a href={page === "login" ? "/register" : "/login"} style={{ textDecoration: "none", fontSize: "20px" }} className="ms-2">
            {xPage} <GrLogin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
