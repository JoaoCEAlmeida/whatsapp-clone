import React from "react";
import { Button } from "@material-ui/core";
import "./index.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../store/StateProvider";
import { actionTypes } from "../store/reducer";

const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://58b04f5940c1474e557e363a.static-01.com/l/images/459914f38f0e6f78aa48d40a775aa87f9d6c36a9.png"
          alt=""
        ></img>
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
