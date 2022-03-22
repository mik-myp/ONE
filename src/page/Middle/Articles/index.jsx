import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import Contents from "../../../component/Contents";

export default function Articles() {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    axios.get("api/articles").then((res) => {
      // console.log(res.data.list.articlesList);
      setArticlesList(res.data.list.articlesList);
    });
  }, []);

  return <Contents title="ONE 文章" dataList={articlesList} />;
}
