import React from "react";
import "./index.css";

export default function Contacto() {
  return (
    <div className="site-content">
      <div className="page-header">
        <h2>联系我们</h2>
      </div>
      <section>
        <h3>新浪微博</h3>
        <ul>
          <li>
            <a href="http://localhost:3000/">@ONE一个工作室</a>
          </li>
          <li>
            <a href="http://localhost:3000/">@亭林镇无业青年</a>
          </li>
        </ul>
        <h3>电子邮箱</h3>
        <p className="One-tougao">
          「一个」文章投稿{" "}
          <a href="http://localhost:3000/">onewenzhang@wufazhuce.com</a>
        </p>
      </section>
    </div>
  );
}
