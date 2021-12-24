import * as React from "react";
import PropTypes from "prop-types";
import { graphql, Link, useStaticQuery } from "gatsby";
import SelectLanguage from "./selectLanguage-zh";

const Layout = ({ children }) => {
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
      <header>
        <span className="site-title">{data.site.siteMetadata.title}</span>
        <SelectLanguage />
      </header>
      <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/zh" className="nav-link-text">
              首页
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/zh/solutions" className="nav-link-text">
              题解
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} &nbsp;
        <Link to="/zh/about">关于 LeetCoder</Link>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
