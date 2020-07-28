import React, { useState, useEffect } from "react";

const ShortenCard = (props) => {
  const { beforeShorten, tinyUrl } = props;
  const [isCopied, setIsCopied] = useState(false);

  //Event handler fn to copy the tinyUrl and make the button toggle to 'Copied'
  function handleClick() {
    var text = tinyUrl;
    setIsCopied(true);
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: Copying to clipboard was successful!", text);
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }

  return (
    <div className="shorten-card">
      <text type="input" className="normal-url">
        {beforeShorten}
      </text>
      <text type="input" className="shortened-url">
        {tinyUrl}
      </text>
      <button onClick={() => handleClick()}>
        {isCopied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

export default ShortenCard;
