import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import PostContent from "./PostContent";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Posting = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const [authStatus, setAuthStatus] = useState(true);

  const auth = () => {
    console.log(token === undefined);
    if (token === undefined) {
      return setAuthStatus(false);
    }
    setAuthStatus(true);
  };

  useState(() => {
    auth();
    console.log({ authStatus });
    if (!authStatus) {
      navigate("/login");
    }
    console.log(token);
  }, [authStatus]);

  return (
    <>
      <Navbar />
      <PostContent />
    </>
  );
};

export default Posting;
