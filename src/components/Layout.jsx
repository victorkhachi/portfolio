import "./component.scss";
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Resume from '../assets/resume.pdf'

function Layout(props) {
  const socials = [
    {
      icon: <FaInstagram />,
      name: "supermanKachi",
      link: "",
    },
    {
      icon: <FaTwitter />,
      name: "@the_biafran",
      link: "https://twitter.com/the_biafran",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "http://linkedIn.com/in/onyedikachi-obi",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/victorkhachi",
    },
  ];
 const width= window.innerWidth
  const {pathname}= useLocation()
  const show=()=>{
    if(pathname==='/' && width<601)
    return true
    else  if(width>600 ){
     
      return true
      
    }
    else return false
  }
  // console.log(show(),pathname==='/' && width<601);
  return (
    <div className="layout">
     {show() && <div className="details">
        <h1>Obi Onyedikachi Victor</h1>
        <h3>Web Developer</h3>
        <ul>
          {socials.map((social) => (
            <li>
              <a href={social.link}>
                {social.icon} {social.name}
              </a>
            </li>
          ))}
          <a style={{marginTop:'14px'}}  href={Resume} download={true}> Download Resume</a>
        </ul>
      </div>}
      <div className="content">{props.children}</div>
    </div>
  );
}

export default Layout;

export const Home = () => {

  const animateRef= useRef(null)
  const callBack=(entries)=>{
    const [entry]=entries
    console.log(entry.isIntersecting);
  }

  // const observer= new IntersectionObserver()

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    const target = animateRef.current;
    if (target) observer.observe(target);
 
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [animateRef]);
  return (
    <div className="home">
      <Link ref={animateRef} className='slide' to={'profile'}>
        <p>01</p>
        <h2>PROFILE</h2>
      </Link>
      <Link ref={animateRef} to={'experience'} className='slideR' style={{justifyContent:'center'}}>
        <p>02</p>
        <h2>WORK EXPERIENCE</h2>
      </Link>
      <Link ref={animateRef} to={'/blog'} className='slide'  style={{justifyContent:'end'}}>
        <p>03</p>
        <h2>BLOG</h2>
      </Link>
    </div>
  );
};
