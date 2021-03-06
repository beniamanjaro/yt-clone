import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";

import "./loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2>Youtube Clone</h2>
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login With google</button>
      </div>
    </div>
  );
};

export default LoginScreen;
