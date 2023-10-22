import React from "react";
import Navbar from "../Navbar/Navbar";
import Content from "./content";
import Cookies from "js-cookie";

const Home = () => {
  return (
    <>
      <Navbar />
      {Cookies.get("token") ? <Content /> : <h1 className="container mt-5">Anda Harus Login dulu</h1>}
    </>
  );
};

export default Home;
