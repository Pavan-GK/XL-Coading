import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./index.css";

const SignIn = (props) => {
  const [userName, setUserName] = useState(null);
  const [Password, setPassword] = useState(null);
  const [loginBoolean, setloginBoolean] = useState(null);
  const [userCredentials, setuserCredentials] = useState({});

  const checkCredentials = () => {
    if (userName == null && Password == null) {
      window.alert("Please fill username and Password");
    }
    if (
      props.getCredentials.username == userName &&
      props.getCredentials.password == Password
    ) {
      setloginBoolean(true);
    } else {
      window.alert("Invalid Credentials");
    }
  };

  return (
    <div className="signInPage">
      <form>
        <div>
          <input
            className="userDetails"
            type="Text"
            placeholder="UserName or Email"
            required
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            className="userDetails"
            type="Password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="button">
          <button onClick={checkCredentials}>SignIn</button>
        </div>
      </form>
      {loginBoolean === true && <Redirect to="/Home" />}
    </div>
  );
};

const mapStateToProps = (store) => ({
  getCredentials: store.userCredentials,
});
export default connect(mapStateToProps, null)(SignIn);
