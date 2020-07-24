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
  // const handleClick = () => {
  //   postData(URL, {
  //     url: urlForShortening,
  //   }).then((data) => {
  //     //console.log(url);
  //     console.log(data);
  //   });
  // };

  const handleChange = (e) => {
    const urlForShortening = e.target.value;
    if (urlForShortening === "") alert("Please enter URL for Shortening");
    setUrlForShortening(urlForShortening);
    console.log(urlForShortening);
    postData(URL, {
      url: urlForShortening,
    }).then((data) => {
      const { hashid } = data;
      console.log(baseUrl.concat(hashid));
      setTinyUrl(baseUrl.concat(hashid));
      //console.log(tinyUrl);
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
        <ShortenCard beforeShorten={urlForShortening} />
      </div>
    </div>
  );
};

export default ShortenList;
