import { useEffect, useState } from "react";
import "./Menu.css";
export default function Chatbox(props) {
  const [messages, setmessages] = useState([]);
  useEffect(async () => {
    fetch();
    setInterval(() => {
      setmessages();
    }, 1000);
  }, []);

  return (
    <div className="Menu">
      <audio>
        <source scr="https://cloud1.usaupload.com/6fPW/MusicEditorvzh3kqkt.bwp_(4).mp3?download_token=63aaefb1e25fe99c534d935824f53f09a18872c34ef0394d396b1f87797c2f2d" />
      </audio>
      <div className=""></div>
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
        <div className="button" onClick={handleClickLogin}>
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
      <div className="test">
        <div className="test2">
          <div className="test2"></div>
        </div>
      </div>
    </div>
  );
}
