import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "../ListItem";

const FirstItem = (props) => {
  const { item, path } = props;
  return (
    <div className="firstArticle" key={item.id}>
      <p className="firstArticle_id">VOL.{item.id}</p>
      <p className="firstArticle_title">
        <Link to={`/${path}/${item.id}`} state={{ item }}>
          {path === "articles" ? (
            <>
              {item.title} - {item.author}
            </>
          ) : (
            <>{item.problem}</>
          )}
        </Link>
      </p>
    </div>
  );
};

export default function Contents(props) {
  const { title, dataList, path } = props;
  return (
    <div className="articles">
      <h4 className="title">{title}</h4>
      <div>
        {dataList.map((item, index) =>
          index === 0 ? (
            <FirstItem item={item} path={path} key={item.id} />
          ) : (
            <ListItem item={item} path={path} key={item.id} />
          )
        )}
      </div>
    </div>

    // <>
    //   {title === "ONE 问题" ? (
    //     <div className="articles">
    //       <h4 className="title">{title}</h4>
    //       <div>
    //         {dataList.map((item, index) =>
    //           index === 0 ? (
    //             <FirstItem item={item} path="problem" />
    //           ) : (
    //             <ListItem item={item} path={"problem"} />
    //           )
    //         )}
    //       </div>
    //     </div>
    //   ) : (
    //     <div className="articles">
    //       <h4 className="title">{title}</h4>
    //       <div>
    //         {dataList.map((item, index) =>
    //           index === 0 ? (
    //             <FirstItem item={item} path="article" />
    //           ) : (
    //             <ListItem item={item} path={"article"} />
    //           )
    //         )}
    //       </div>
    //     </div>
    //   )}
    // </>
  );
}
