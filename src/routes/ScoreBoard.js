import { useEffect, useState } from "react";
import "./ScoreBoard.css";
export default function ScoreBoard(props) {
  const [self_highest_score, setSelf_highest_score] = useState(10);
  const [self_history_score, setSelf_history_score] = useState([
    { time: "Sun Dec 12 1999", score: 100 },
  ]);
  useEffect(() => {
    setSelf_history_score(
      localStorage.getItem("self_history_score")
        ? JSON.parse(localStorage.getItem("self_history_score"))
        : []
    );

    setSelf_highest_score(
      self_history_score.reduce((pre, curr) => {
        if (pre > curr.score) return pre;
        else return curr.score;
      }, 0)
    );
  }, []);

``````````````````````````````````````````````````````````````````````````````  return (
    <div className="ScoreBoard">
      <audio>
        <source scr="https://cloud1.usaupload.com/6fPW/MusicEditorvzh3kqkt.bwp_(4).mp3?download_token=63aaefb1e25fe99c534d935824f53f09a18872c34ef0394d396b1f87797c2f2d" />
      </audio>
      <div className="title">Bảng Điểm</div>
      <div className="ScoreBoard--content">
        <div className="ScoreBoard--content--left">
          <div className="rank--title">Xếp Hạng</div>
          <div className="rank--player--container">
            <div className="rank--player--number">1</div>
            <div>
              <div className="rank--player--name">Điểm cao nhất</div>
              <div className="rank--player--score">100</div>
            </div>
          </div>
          <div className="rank--player--container">
            <div className="rank--player--number">1</div>
            <div>
              <div className="rank--player--name">Trần Anh Tuấn</div>
              <div className="rank--player--score">
                Điểm: {self_highest_score}
              </div>
            </div>
          </div>
        </div>

        <div className="ScoreBoard--content--right">
          <div className="player--title">Cá Nhân</div>
          <div className="player--hightscore">
            Điểm cao nhất: {self_highest_score}
          </div>
          {self_history_score
            .sort((a, b) => {
              new Date(b.time);
              return new Date(b.time) - new Date(a.time);
            })
            .map((item, index, array) => {
              if (index < 6)
                return (
                  <div className="player--history--container">
                    <div className="player--history--date">
                      thời gian: {item.time}
                    </div>
                    <div className="player--history--score">
                      Điểm: {item.score}
                    </div>
                  </div>
                );
            })}
        </div>
      </div>
    </div>
  );
}
