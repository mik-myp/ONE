import React from "react";
import Head from "./page/Head";
import Foot from "./page/Foot";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./route";

import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

export default function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Layout>
        <Header>
          <Head />
        </Header>
        <Content>{element}</Content>
        <Footer>
          <Foot />
        </Footer>
      </Layout>
    </>
  );
}
