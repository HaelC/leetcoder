import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import "./layout.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className="site-title">{data.site.siteMetadata.title}</header>
      <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/" className="nav-link-text">
              Home
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/problems" className="nav-link-text">
              Problems
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
