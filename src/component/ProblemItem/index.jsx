import React from "react";

export const ProblemItem = (props) => {
  const { item } = props;
  return (
    <div key={item.aid}>
      <p className="firstP">
        {item.aid}. {item.content}
      </p>
      <p className="lastP">@{item.name}</p>
    </div>
  );
};
