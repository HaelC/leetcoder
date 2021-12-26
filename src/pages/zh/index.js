import React from "react";
import Layout from "../../components/layout-zh";
import Seo from "../../components/seo";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <Seo title="Home" />
      <p>你好 世界</p>
    </Layout>
  );
}
