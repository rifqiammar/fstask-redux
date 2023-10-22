import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../actions/userAction";
import { useNavigate } from "react-router-dom";

const MainRegister = () => {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const dispatche = useDispatch();
  const navigate = useNavigate();

  //   const { addUserResult } = useSelector((state) => state.UsersReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatche(addUser({ nama, username, password, email, role }));
    navigate("/login");
    // console.log(addUserResult.message);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label for="nama" className="form-label float-start">
            <h5>Nama</h5>
          </label>
          <input type="text" className="form-control" id="nama" onChange={(event) => setNama(event.target.value)} name="nama" placeholder="fulan jose" required />
          <div id="emailHelp" className="form-text"></div>
        </div>
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
        <div className="mb-3">
          <label for="email" className="form-label float-start">
            <h5>Email</h5>
          </label>
          <input type="email" className="form-control" id="email" onChange={(event) => setEmail(event.target.value)} name="email" placeholder="fulanJ@mail.com" />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="username" className="form-label float-start">
            <h5>role</h5>
          </label>
          <input type="text" className="form-control" id="role" onChange={(event) => setRole(event.target.value)} name="role" placeholder="member" />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <button type="submit" className="btn btn-success btn-lg float-end">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MainRegister;
