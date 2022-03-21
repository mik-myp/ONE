import React from "react";
import "./index.css";
import { useLocation } from "react-router-dom";
export default function ArticleDetails(props) {
  const {
    state: { item },
  } = useLocation();
  console.log(item);
  return (
    <>
      <div className="main">
        <div className="main-all">
          <div className="brief">{item.brief}</div>
          <h2 className="details-title">{item.title}</h2>
          <p className="author">作者/{item.author}</p>
          <div className="concent">
            <p>{item.content.slice(0, 2000)}</p>
            <p>{item.content.slice(2000, 4000)}</p>
            <p>{item.content.slice(4000, 6000)}</p>
            <p>{item.content.slice(6000, 8000)}</p>
            <p>{item.content.slice(8000, 10000)}</p>
            <p>{item.content.slice(10000)}</p>
          </div>
          <p className="principal">责任编辑：{item.principal}</p>
        </div>
      </div>
    </>
  );
}
