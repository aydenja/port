import React, { useState } from "react";

const Rssfetch = () => {
    
  const [items, setItems] = useState([]);

  

  const getRss = async (e) => {
    const res = await fetch(`https://api.allorigins.win/get?url=https://letterboxd.com/aydenja/rss/`);
    const { contents } = await res.json();
    const feed = new window.DOMParser().parseFromString(contents, "text/xml");
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
            <div dangerouslySetInnerHTML={{ __html: item.img }} />
            </li>
        );
      })}
    </ul>
    </div>
  );
}

export default Rssfetch