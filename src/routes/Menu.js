import { useEffect, useState } from "react";
import "./Menu.css";
export default function Menu(props) {
  const [LinkSkin, setLinkSkin] = useState([
    {
      link: "https://file1.dangcongsan.vn/DATA/0/2018/10/68___gi%E1%BA%BFng_l%C3%A0ng_qu%E1%BA%A3ng_ph%C3%BA_c%E1%BA%A7u__%E1%BB%A9ng_h%C3%B2a___%E1%BA%A3nh_vi%E1%BA%BFt_m%E1%BA%A1nh-16_51_07_908.jpg",
    },
    {
      link: "https://techkalzen.com/wp-content/uploads/2020/02/tron-bo-nhung-hinh-anh-dep-buon-mang-tam-trang-suy-tu-1.jpg",
    },
    {
      link: "https://file1.dangcongsan.vn/DATA/0/2018/10/68___gi%E1%BA%BFng_l%C3%A0ng_qu%E1%BA%A3ng_ph%C3%BA_c%E1%BA%A7u__%E1%BB%A9ng_h%C3%B2a___%E1%BA%A3nh_vi%E1%BA%BFt_m%E1%BA%A1nh-16_51_07_908.jpg",
    },
  ]);

  function handleClickStart() {
    localStorage.setItem("player-skin", "https://i.imgur.com/DznCJPN.png");
    document.location.replace("/");
  }
  function handleClickChooseSkin() {}
  function handleClickScoreBoard() {
    document.location.replace("/scoreboard");
  }
  return (
    <div className="Menu">
      <audio>
        <source scr="https://cloud1.usaupload.com/6fPW/MusicEditorvzh3kqkt.bwp_(4).mp3?download_token=63aaefb1e25fe99c534d935824f53f09a18872c34ef0394d396b1f87797c2f2d" />
      </audio>

      <div className="title">Flappy Pig</div>
      <div className="btn--menu--container">
        <div className="button" onClick={handleClickStart}>
          <img src="https://i.imgur.com/ZrTaauC.png" alt="" width="180px" />
          <label>Bắt Đầu</label>
        </div>
        <div className="button" onClick={handleClickScoreBoard}>
          <img src="https://i.imgur.com/ZrTaauC.png" alt="" width="180px" />
          <label>Bảng Điểm</label>
        </div>
        <div className="button" onClick={handleClickStart}>
          <img src="https://i.imgur.com/ZrTaauC.png" alt="" width="180px" />
          <label>Đăng Nhập</label>
        </div>
        <div className="button" onClick={handleClickChooseSkin}>
          <img src="https://i.imgur.com/ZrTaauC.png" alt="" width="180px" />
          <label>Nhân Vật</label>
        </div>
        {/* <div className="skin-container">
          {LinkSkin.map((skin) => {
            return (
              <div className="radio">
                <label>
                  <input type="radio" name="skin" value="option1" />
                  Option 1
                </label>
                <img width="50px" src={skin.link} />
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}
