import React from "react";
import "./index.css";

export default function Detail() {
  return (
    <>
      <div className="detail">
        <h4>App「一个」</h4>
        <p>
          每天只为你准备一张图片、一篇文字和一个问答 <br />
          韩寒主编和监制 原《独唱团》主创成员共同制作
        </p>
        <p>
          <img
            src="http://image.wufazhuce.com/www-one-app_qrcode.png"
            alt="App下载"
            style={{ width: "150px" }}
          />
          <img
            src="http://image.wufazhuce.com/www-one-wx_qrcode.png"
            alt="微信公众号"
            style={{ width: "150px" }}
          />
        </p>
        <p>
          - 也可搜索 - <br />
          "韩寒一个" 或 "ONE一个"
        </p>
      </div>
    </>
  );
}
