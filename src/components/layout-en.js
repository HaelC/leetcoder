import * as React from "react";
import PropTypes from "prop-types";
import { graphql, Link, useStaticQuery } from "gatsby";
import SelectLanguage from "./selectLanguage-en";

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
            <Link to="/en" className="nav-link-text">
              Home
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/en/solutions" className="nav-link-text">
              Solutions
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} &nbsp;
        <Link to="/en/about">About LeetCoder</Link>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
