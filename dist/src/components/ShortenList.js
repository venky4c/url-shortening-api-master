import React, { useState } from "react";
import ShortenCard from "./ShortenCard";

const ShortenList = (props) => {
  const [urlForShortening, setUrlForShortening] = useState();
  const [tinyUrl, setTinyUrl] = useState();

  const URL = "https://rel.ink/api/links/";
  const baseUrl = "https://rel.ink/";

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const handleChange = (e) => {
    const urlForShortening = e.target.value;
    if (urlForShortening === "") alert("Please enter URL for Shortening");
    setUrlForShortening(urlForShortening);
    console.log(urlForShortening);
    postData(URL, {
      url: urlForShortening,
    }).then((data) => {
      const { hashid } = data;
      const tinyUrl = baseUrl.concat(hashid);
      setTinyUrl(tinyUrl);
      console.log(`tinyUrl is ${tinyUrl}`);
    });
  };

  return (
    <div className="shorten-list">
      <div className="ui">
        <input
          type="text"
          name=""
          id=""
          placeholder="Shorten a link here..."
          onChange={handleChange}
        />
        <button onClick={postData}>Shorten It!</button>
      </div>
      <div className="output">
        <ShortenCard beforeShorten={urlForShortening} tinyUrl={tinyUrl} />
      </div>
    </div>
  );
};

export default ShortenList;
