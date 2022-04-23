import React from 'react'
import './Footer.css'
import { FaLinkedinIn } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
    <footer class="site-footer">
      <div class="container">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by Ayden Albertsen
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="linkedin" href="https://www.linkedin.com/in/ayden-albertsen-a33222213/"><FaLinkedinIn/></a></li>
              <li><a class="letterb" href="https://letterboxd.com/aydenja/"><i class="fa fa-dribbble"><BiCameraMovie/></i></a></li>
              <li><a class="gh" href="https://github.com/aydenja"><i class="fa fa-linkedin"><BsGithub/></i></a></li> 
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  )
}

export default Footer