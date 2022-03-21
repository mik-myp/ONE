import React from "react";
import Head from "./page/Head";
import Foot from "./page/Foot";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./route";

export default function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Head />
      {element}
      <Foot />
    </>
  );
}
