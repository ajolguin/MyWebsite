import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class Homepage extends Component {
  render() {
    return (
    	<div className="container-fluid">


    	<h1>
        Who I am.. <br/> &nbsp; Software Developer
      </h1>

      <p>
       <br/> Hello! My name is Adrian Olguin. I am currently a fourth-year student at UC Santa Barbara studying Computer Science!
       I worked as a Mobile Application/Web Development Intern for DiveSB for most of my junior year. Simultaneously, I was a Webmaster for the Sociology
       department's <a href="http://www.sexinfoonline.com">SexInfoOnline</a> website which currently reaches over a million users.
       I have also worked on several projects, and currently still am, which you can learn more about in the
       <Link to="/Projects"> Projects </Link> tab! If you would like a copy of my resume, or have any questions please reach out to me
       via email at ajolguin@ucsb.edu. Thank you for visiting my portfolio!
      </p>


    	</div>
    );
  }
}

export default Homepage;
