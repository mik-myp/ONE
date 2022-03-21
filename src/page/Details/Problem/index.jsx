import React from "react";
import "./index.css";
import { useLocation } from "react-router-dom";
export default function ProblemDetails(props) {
  const {
    state: { item },
  } = useLocation();
  console.log(item);
  return (
    <>
      <div className="main">
        <div className="main-all">
          <h4 className="details-title-h4">{item.problem}</h4>
          <div className="details-title-div">{item.problem}</div>
          <hr style={{ margin: "20px 0", border: "1px solid #eee" }} />
          <div className="concent-div">
            {item.answerList.map((item, index) => (
              <div key={item.aid}>
                <p className="firstP">
                  {index + 1}. {item.content}
                </p>
                <p className="lastP">@{item.name}</p>
              </div>
            ))}
          </div>
          <p className="principal">责任编辑：{item.principal}</p>
        </div>
      </div>
    </>
  );
}
