import { useEffect, useState } from "react";

import config from "../config";
import "./Login.css";

export default function Login(props) {
  function handleReturnBtnClick() {
    document.location.replace("/menu");
  }
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  async function handleClickloginbtn(e) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "Application/x-www-form-urlencoded" },
      body: JSON.stringify({ username: username, password: password }),
      credentials: "include",
    };
    let res = await fetch(config.host + "/login/login", requestOptions).then(
      (response) => response.json()
    );

    if (res.code === 0) alert("Lỗi: " + res.message);
    if (res.code === 1) {
      alert("Đăng nhập thành công");
      document.location.replace("/menu");
    }
  }

  function handleClickRegisterbtn(e) {
    document.location.replace("/register");
  }
  useEffect(async () => {
    const requestOptions = {
      method: "get",
      headers: { "Content-Type": "Application/x-www-form-urlencoded" },
      credentials: "include",
    };

    let res = await fetch(
      config.host + "/login/checkcookie",
      requestOptions
    ).then((response) => response.json());

    if (res.code === 0);
    if (res.code === 1) document.location.replace("/menu");
  }, []);
  return (
    <div className="Login">
      <div className="return--btn" onClick={handleReturnBtnClick}>
        <img src="https://i.imgur.com/OleUNfn.png" width="40px"></img>
      </div>
      <div className="register--btn" onClick={handleClickRegisterbtn}>
        Đăng Kí
      </div>
      <div className="Login--container">
        <img
          className="Login--img"
          src="https://i.imgur.com/HNEu2rK.png"
          width="300px"
        />
        <div className="Login--form">
          <div className="Login--form--title">Đăng nhập</div>
          <div className="Login--input--container">
            <label>tài khoản: </label>
            <input id="username" />
          </div>
          <div className="Login--input--container">
            <label>mật khẩu: </label>
            <input type="password" id="password" />
          </div>
          <div className="Login--btn--container">
            <div className="Login--btn" onClick={handleClickloginbtn}>
              Đăng Nhập
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
