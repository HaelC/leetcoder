import React from "react";
import Layout from "../../components/layout-en";
import Seo from "../../components/seo";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <Seo title="Home" />
      <p>Hello world</p>
    </Layout>
  );
}
