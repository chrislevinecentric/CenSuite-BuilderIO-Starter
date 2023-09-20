import React from "react";
import Head from "next/head";

import "rsuite/styles/index.less";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className="hero">
      <h1 className="title">Welcome to CenSuite</h1>
      <p className="description">
        A suite of enterprise-grade React components designed to provide a great user and developer experience.
      </p>
    </div>
  </div>
);

export default Home;
