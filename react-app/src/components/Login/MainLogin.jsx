import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../actions/userAction";

const MainLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatche = useDispatch();
  const navigate = useNavigate();

  const { loginUserResult } = useSelector((state) => state.UsersReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatche(loginUser({ username, password }));
  };

  // Jika data di LoginUserResult ada / Berhasil Login Redirect
  useEffect(() => {
    if (loginUserResult) {
      navigate("/");
    }
  }, [loginUserResult]);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label for="username" className="form-label float-start">
            <h5>username</h5>
          </label>
          <input type="text" className="form-control" id="username" onChange={(event) => setUsername(event.target.value)} name="username" placeholder="@fulan" />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="password" className="form-label float-start">
            <h5>Password</h5>
          </label>
          <input type="password" className="form-control " id="password" onChange={(event) => setPassword(event.target.value)} name="password" placeholder="*****" />
        </div>

        <button type="submit" className="btn btn-success btn-lg float-end">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MainLogin;
