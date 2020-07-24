import React from "react";

const ShortenCard = (props) => {
  const { beforeShorten, tinyUrl } = props;
  return (
    <div className="shorten-card">
      <span className="noraml-url">{beforeShorten}</span>
      <span className="shortened-url">{tinyUrl}</span>
      <button>Copy</button>
    </div>
  );
};

export default ShortenCard;
