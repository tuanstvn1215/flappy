import { useEffect, useState } from "react";
import "./Register.css";

import config from "../config";
export default function Register(props) {
  function handleReturnBtnClick() {
    document.location.replace("/menu");
  }
  async function handleClickloginbtn(e) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let rppassword = document.getElementById("rppassword").value;
    if (password != rppassword) {
      alert("Nhập lại mật khẩu phải trùng với mật khẩu");
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "Application/x-www-form-urlencoded" },
      body: JSON.stringify({ username: username, password: password }),
      credentials: "include",
    };
    let res = await fetch(config.host + "/login/register", requestOptions).then(
      (response) => response.json()
    );
    if (res.code === 0) alert("Lỗi: " + res.message);
    if (res.code === 1) {
      alert(res.message);
      document.location.replace("/menu");
    }
  }
  function handleClickRegisterbtn(e) {
    document.location.replace("/login");
  }
  return (
    <div className="Register">
      <div className="return--btn" onClick={handleReturnBtnClick}>
        <img src="https://i.imgur.com/OleUNfn.png" width="40px"></img>
      </div>
      <div className="register--btn" onClick={handleClickRegisterbtn}>
        Đăng nhập
      </div>
      <div className="Login--container">
        <img
          className="Login--img"
          src="https://i.imgur.com/HNEu2rK.png"
          width="300px"
        />
        <div className="Login--form">
          <div className="Login--form--title"> Đăng Kí </div>
          <div className="Login--input--container">
            <label>tài khoản: </label>
            <input id="username" />
          </div>
          <div className="Login--input--container">
            <label>mật khẩu: </label>
            <input type="password" id="password" />
          </div>
          <div className="Login--input--container">
            <label>nhập lại: </label>
            <input type="password" id="rppassword" />
          </div>
          <div className="Login--btn--container">
            <div className="Login--btn" onClick={handleClickloginbtn}>
              Đăng Kí
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
