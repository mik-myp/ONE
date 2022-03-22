import React from "react";
import { Link } from "react-router-dom";

export default function Contents(props) {
  const { title, dataList } = props;
  // console.log(props);
  return (
    <>
      {title === "ONE 问题" ? (
        <div className="articles">
          <h4 className="title">{title}</h4>
          <div>
            {dataList.map((item, index) =>
              index === 0 ? (
                <div className="firstArticle" key={item.id}>
                  <p className="firstArticle_id">VOL.{item.id}</p>
                  <p className="firstArticle_title">
                    <Link to={`/problem/${item.id}`} state={{ item }}>
                      {item.problem}
                    </Link>
                  </p>
                </div>
              ) : (
                <li key={item.id}>
                  <span>VOL.{item.id}</span>
                  <Link to={`/problem/${item.id}`} state={{ item }}>
                    {" "}
                    {item.problem}
                  </Link>
                </li>
              )
            )}
          </div>
        </div>
      ) : (
        <div className="articles">
          <h4 className="title">{title}</h4>
          <div>
            {dataList.map((item, index) =>
              index === 0 ? (
                <div className="firstArticle" key={item.id}>
                  <p className="firstArticle_id">VOL.{item.id}</p>
                  <p className="firstArticle_title">
                    <Link to={`/article/${item.id}`} state={{ item: item }}>
                      {item.title} - {item.author}
                    </Link>
                  </p>
                </div>
              ) : (
                <li key={item.id}>
                  <span>VOL.{item.id}</span>
                  <Link to={`/article/${item.id}`} state={{ item: item }}>
                    {" "}
                    {item.title} - {item.author}
                  </Link>
                </li>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
