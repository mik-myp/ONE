import React from "react";
import { Link } from "react-router-dom";

export const ListItem = (props) => {
  const { item, path } = props;
  return (
    <li key={item.id}>
      <span>VOL.{item.id}</span>
      <Link to={`/${path}/${item.id}`} state={{ item: item }}>
        {" "}
        {path === "articles" ? (
          <>
            {item.title} - {item.author}
          </>
        ) : (
          <>{item.problem}</>
        )}
      </Link>
    </li>
  );
};
