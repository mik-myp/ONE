import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function Foot() {
  return (
    <>
      <div className="foot">
        <hr style={{ width: "854px", margin: "20px 0" }} />
        <p>
          © 2012-2022
          <Link to="/">「ONE · 一个」</Link>
        </p>
        <p>
          <Link to="/acercade">关于</Link>
          <Link to="/politica">用户协议</Link>
          <Link to="/contacto">联系我们</Link>
          <span>上海市反电信网络诈骗中心 962110</span>
        </p>
        <p>
          <a href="http://localhost:3000/">ONE一个工作室</a>
          <a href="http://localhost:3000/">亭林镇无业青年</a>
        </p>
        <p>复杂世界里, 一个就够了. One is all.</p>
        <p>
          <a href="https://beian.miit.gov.cn">沪ICP备13042400号-1</a>
        </p>
      </div>
    </>
  );
}
