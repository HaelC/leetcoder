import { Link } from "gatsby";
import React from "react";

function SelectLanguage() {
  const isBrowser = typeof window !== "undefined";
  const suffixPath = isBrowser ? window.location.pathname.substring(3) : "/";

  return (
    <ul className="select-language">
      <li className="current-language">English</li>
      <li>
        <Link to={`/zh${suffixPath}`}>中文</Link>
      </li>
    </ul>
  );
}

export default SelectLanguage;
