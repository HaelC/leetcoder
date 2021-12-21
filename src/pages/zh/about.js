import React from "react";
import Layout from "../../components/layout-zh";
import Seo from "../../components/seo";

export default function About() {
  return (
    <Layout>
      <Seo lang="zh-CN" title="About" description="About LeetCoder" />
      <h2>关于 LeetCoder</h2>
      <p>
        LeetCoder is a website which includes solutions for LeetCode problems.
        As a personal website, LeetCoder is not affiliated with LeetCode. All
        the solutions and code on LeetCoder are written by myself, Hael.
      </p>
      <p>
        I've learned a lot practising LeetCode problems. I'd like to keep my
        ideas and solutions here at LeetCoder. Hope it could be helpful!
      </p>
    </Layout>
  );
}
