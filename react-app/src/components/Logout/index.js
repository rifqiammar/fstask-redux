import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("token");
    setStatus(true);
    console.log(status);
  };

  useState(() => {
    logout();
    if (!status) {
      navigate("/login");
    }
  }, [status]);

  return <></>;
};

export default Logout;
