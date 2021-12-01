import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "./404.css";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Sorry, you just hit a route that doesn&#39;t exist... </p>

    <h3>How about: </h3>
    <ul className="not-found-options">
      <li>
        <Link to="/">Returning to LeetCoder home page</Link>
      </li>
      <li>
        <a href="https://leetcode.com">Going to LeetCode to solve a problem</a>
      </li>
    </ul>
  </Layout>
);

export default NotFoundPage;
