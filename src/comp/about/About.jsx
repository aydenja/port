import React from 'react'
import "./About.css"
import FadeIn from 'react-fade-in';

const About = () => {
  return (
    <div class = "about">
      <div class = "hello">
            <h1 class = "typed1">About me: </h1>
      </div>
      <FadeIn delay = {1000} transitionDuration = {1000} >
        <div>
          <ul>
            <li class = "r60">
            <div class = "atext">
              <p>
              Hello, my name is Ayden Albertsen, and I am from Temecula, California. I am currently a junior studying software engineering at Iowa State University. Outside of programming, I enjoy watching movies, reading books, and hanging out with friends. Thanks for visiting my site :)
              </p>
          </div>
            </li>
            <li class = "socials">
            <div class = "center">
            
              <h1>Contact:</h1>
              <a href="mailto:aydenja@gmail.com"><h2>Email: aydenja@gmail.com</h2></a>
              <h2>Phone: (951)-410-9979</h2>
            </div>
            </li>
           
          </ul>
          
        </div>
        <div>
          <h1 class = "movies">Movies I like...</h1>
          <ul>
          <li class = "postli">
            <img class = {"post"} src={require('./shining Large.jpeg')}  alt = {"NA"}/>
            <h2>★★★★★</h2>
          </li>
          <li class = "postli">
            <img class = {"post"} src={require('./sa Large.jpeg')}  alt = {"NA"}/>
            <h2>★★★★★</h2>
          </li>
          <li class = "postli">
            <img class = {"post"} src={require('./mk Large.jpeg')}  alt = {"NA"}/>
            <h2>★★★★★</h2>
          </li>
          <li class = "postli">
            <img class = {"post"} src={require('./yiyi Large.jpeg')}  alt = {"NA"}/>
            <h2>★★★★★</h2>
          </li>
        </ul>
        <div class ="leb">
            <a href='https://letterboxd.com/aydenja/'><img src="https://a.ltrbxd.com/logos/letterboxd-logo-h-neg-rgb.svg" alt="NA" /></a>
          </div>
        </div>
        
      </FadeIn>
    </div>
  )
}

export default About