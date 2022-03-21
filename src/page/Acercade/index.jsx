import React from "react";
import "./index.css";

export default function Acercade() {
  return (
    <div className="site-content">
      <div className="page-header">
        <h2>关于</h2>
      </div>
      <section>
        <p>
          「ONE·一个」隶属于上海有树文化传播有限公司，是由韩寒主编和监制，原《独唱团》主创成员共同制作的文艺应用软件。发布不到24
          个小时就登上 App Store 免费排行总榜第一名。
        </p>
        <p>
          不追热点，不关时政，不要喧哗，不惹纷争。关掉微博，离开微信，带着微笑，去到
          Web 0.1 时代。「一个」足够简单。
        </p>
        <div className="people">
          <p>出品人/监制：韩寒</p>
          <p>首席运营官：李雯雯</p>
          <p>责任编辑：崔智皓</p>
          <p>产品研发：王泽瑄</p>
        </div>
        <p>复杂世界里，一个就够了。</p>
      </section>
    </div>
  );
}
