import React from 'react'
import './Header.css'



export const Header = () => {
  // eslint-disable-next-line
  return (
    <div> 
      <ul class = "nav">
        <li class = "name"><h1><a href = "/">Ayden Albertsen</a></h1></li>
        <li class = "headerB"><a href="/about">About</a></li>
        <li class = "headerB"><a href="https://docs.google.com/document/d/1-hLvhB1G-JK10zrogdE-joqtIRqhfNszqUykC0MEfVg/export?format=pdf"  download>Resume</a></li>
      </ul> 
    </div>
  )
}

export default Header

//rafce 