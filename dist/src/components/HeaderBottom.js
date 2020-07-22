import React from "react";

const HeaderBottom = () => (
  <div className="header-bottom">
    <div className="main">
      <h1 className="title">More than just shorter links</h1>
      <p>
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <button className="get-started">Get Started</button>
    </div>
    <div className="work-image">
      <img
        src={require("../assets/images/icons/illustration-working.svg")}
        alt=""
      />
    </div>
  </div>
);

export default HeaderBottom;
