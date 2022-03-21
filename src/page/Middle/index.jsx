import React from "react";
import Slideshow from "./Slideshow";
import Article from "./Articles";
import Problems from "./Problems";
import Contact from "./Contact";
import "./index.css";
import { Row, Col } from "antd";

export default function Middle() {
  return (
    <>
      <div className="body">
        <Row>
          <Col span={16} className="body-left">
            <Slideshow />
          </Col>
          <Col span={8} className="body-right">
            <Article />
            <Problems />
          </Col>
        </Row>
        <Contact />
      </div>
    </>
  );
}
