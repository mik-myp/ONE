import React from "react";
import "./index.css";
import { useLocation } from "react-router-dom";
import moment from "moment";

export default function PictureDetails(props) {
  const {
    state: { item },
  } = useLocation();
  console.log(item);
  return (
    <>
      <div className="main-div">
        <div className="main-image">
          <img src={item.img_url} alt="图片" />
        </div>
        <div className="main-image-footer">
          <div className="main-image-footer-id">VOL.{item.id}</div>
          <div className="main-image-footer-sheying">摄影</div>
          <div style={{ clear: "both" }}></div>
        </div>
        <div className="main-image-info">
          <div className="main-image-info-brief">{item.brief}</div>
          <div className="main-image-info-time">
            <p className="day">{item.time.slice(8)}</p>
            {/* 将时间转换成需要的格式 */}
            <p className="myear">{moment(item.time).format("MMM YYYY")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
