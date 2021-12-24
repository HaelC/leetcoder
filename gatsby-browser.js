require("prismjs/themes/prism-okaidia.css");
require(`katex/dist/katex.min.css`);
const navigate = require("gatsby").navigate;

exports.onRouteUpdate = ({ location }) => {
  if (location.pathname === "/") {
    const lang = navigator.language;
    if (lang.startsWith("zh")) {
      navigate("/zh");
    } else {
      navigate("/en");
    }
  }
};
