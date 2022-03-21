import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "../../../component/Content";

export default function Problems() {
  const [problemsList, setProblemsList] = useState([]);
  useEffect(() => {
    axios.get("api/problems").then((res) => {
      // console.log(res.data.list.problemsList);
      setProblemsList(res.data.list.problemsList);
    });
  }, []);

  return <Content title="ONE 问题" dataList={problemsList} />;
}
