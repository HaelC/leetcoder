import { Link } from "gatsby";
import React from "react";

function SelectLanguage() {
  const suffixPath = window.location.pathname.substring(3);

  return (
    <ul className="select-language">
      <li>
        <Link to={`/en${suffixPath}`}>English</Link>
      </li>
      <li className="current-language">中文</li>
    </ul>
  );
}

export default SelectLanguage;
