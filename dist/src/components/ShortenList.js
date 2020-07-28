import React, { useState, useEffect } from "react";
import ShortenCard from "./ShortenCard";

const ShortenList = (props) => {
  const [urlForShortening, setUrlForShortening] = useState("");
  // We need to persist the user entered url's even after the browser refresh.
  // So we are utilizing the same urlList object which is a key value pair of
  // the urlForShortening(key) and the resultant tinyUrl(value)
  const [urlList, setUrlList] = useState(
    JSON.parse(localStorage.getItem("itemForStorage")) || {}
  );

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
    const userInputUrl = e.target.value;
    setUrlForShortening(userInputUrl);
  };
  // In useEffect hook, we are setting the localStorage to the urlList.
  //setItem fn expects a string as second parameter, we are converting the urlList to a string
  useEffect(() => {
    localStorage.setItem("itemForStorage", JSON.stringify(urlList));
  }, [urlList]);
  console.log("after useEffect ", JSON.stringify(urlList));
  const handleClick = () => {
    if (urlForShortening === "") {
      alert("Please enter URL for Shortening");
      return;
    }
    console.log(urlForShortening);
    postData(URL, {
      url: urlForShortening,
    }).then((data) => {
      const { hashid } = data;
      console.log(`hashid is`, hashid);
      const tinyUrl = baseUrl.concat(hashid);
      setUrlList({ ...urlList, [urlForShortening]: tinyUrl });
    });
  };

  //In this fn, we are iterate through the list of urls and
  // store the urlForShortening and the resultant tinyUrl into the
  // urlList object as a key value pair and then pass them as props
  // to ShortenCard component for displaying them

  const renderList = () => {
    return Object.keys(urlList).map((item) => (
      <ShortenCard beforeShorten={item} tinyUrl={urlList[item]} />
    ));
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
        <button onClick={() => handleClick()}>Shorten It!</button>
      </div>
      <div className="output">{renderList()}</div>
    </div>
  );
};

export default ShortenList;
