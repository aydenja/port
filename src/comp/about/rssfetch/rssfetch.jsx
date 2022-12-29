import React, { useState } from "react";

const Rssfetch = () => {
    
  const [items, setItems] = useState([]);

  function b64_to_utf8( str ) {
    return decodeURIComponent(escape(window.atob( str )));
  }

  const getRss = async (e) => {
    const res = await fetch(`https://api.allorigins.win/get?url=https://letterboxd.com/aydenja/rss/`);
    const { contents } = await res.json();
    const split = contents.split("base64,");
    const final = b64_to_utf8(split[1]);
    const feed = new window.DOMParser().parseFromString(final, "text/xml");
    const items = feed.querySelectorAll("item");
    const feedItems = [...items].map((el) => ({
      link: el.querySelector("link").innerHTML,
      title: el.querySelector("title").innerHTML,
      img: el.querySelector("description").innerHTML.replace("<![CDATA[", "").replace("]]>", "")
    }));
    setItems(feedItems);
  };
  getRss();
  return (
    <div>
          <h1 class = "movies">Recently Watched</h1>
          <ul>
          
      {items.slice(0, 4).map((item) => {
        return (
            <li class = "current">
            <p><a href={item.link}>{item.title}</a></p>
            <div class = "cimg" dangerouslySetInnerHTML={{ __html: item.img }} />
            <hr class="solidc"></hr>
            </li>
        );
      })}
    </ul>
    </div>
  );
}

export default Rssfetch