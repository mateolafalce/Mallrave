import React from "react";

function backToTop() {
  window.scrollTo(0, 0)
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="back-to-top" onClick={backToTop}>Back to top</div>
        <footer></footer>
      </div>
    );
  }
}

export default Footer;
