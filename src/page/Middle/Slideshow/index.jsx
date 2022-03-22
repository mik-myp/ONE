import React, { useEffect, useState, useRef } from "react";
import { Carousel, Row, Col, Image } from "antd";
import axios from "axios";
import moment from "moment";
import "./index.css";
import { Link } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function Slideshow() {
  const [articlesList, setArticlesList] = useState([]);
  const carouselRef = useRef();

  const handlePrev = () => {
    carouselRef.current.prev();
  };
  const handleNext = () => {
    carouselRef.current.next();
  };
  // 页面渲染时获取数据
  useEffect(() => {
    axios.get("api/articles").then((res) => {
      // console.log(res.data.list.articlesList);
      setArticlesList(res.data.list.articlesList);
    });
  }, []);
  return (
    <>
      <Carousel className="carousel" ref={carouselRef} autoplay={true}>
        {articlesList.map((item) => (
          <div key={item.id}>
            <Link to={`/one/${item.id}`} state={{ item }}>
              <Image
                src={item.img_url}
                className="image"
                alt="图片"
                preview={false}
              />
            </Link>
            <div className="image-footer">摄影</div>
            <Row
              style={{
                justifyContent: "space-between",
                backgroundColor: "#D6D6D6",
              }}
            >
              <Col className="content">{item.brief}</Col>
              <Col className="mainInfo">
                <p className="titulo">VOL.{item.id}</p>
                {/* 截取所需要的数据 */}
                <p className="dom">{item.time.slice(8)}</p>
                {/* 将时间转换成需要的格式 */}
                <p className="may">{moment(item.time).format("MMM YYYY")}</p>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
      <a onClick={handlePrev} className="carouseIcon">
        <span className="CarouselLeftIcon">
          <LeftOutlined style={{ fontSize: "30px" }} />
        </span>
      </a>
      <a onClick={handleNext} className="carouseIcon">
        <span className="CarouselRigthIcon">
          <RightOutlined style={{ fontSize: "30px" }} />
        </span>
      </a>
    </>
  );
}
