import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Blog from "../blog";
import Works from "../works";
import "./index.scss";

function Main(props) {
  const { pathname } = useLocation();
  const checkRoute = (data) => {
    return data === pathname;
  };

  console.log(checkRoute("/profile"));
  return (
    <div className="main ">
      <div className="head">
        <div className="nav">
          <Link
            className={checkRoute("/profile") && "selected"}
            to={"/profile"}
          >
            PROFILE
          </Link>
          <Link
            className={checkRoute("/experience") && "selected"}
            to={"/experience"}
          >
            WORK EXPERIENCE
          </Link>
          <Link className={checkRoute("/blog") && "selected"} to={"/blog"}>
            BLOG
          </Link>
          <Link to={""}>
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.506836 15.142L14.6152 0.999862" stroke="#666666" />
              <path d="M0.506836 1L14.6152 15.1421" stroke="#666666" />
            </svg>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="experience" element={<Works />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default Main;

const Profile = () => {
  const FrontendSKill = [
    {
      name: "HTML",
      proficiency: 5,
      color: "purple",
    },
    {
      name: "SCSS",
      proficiency: 4,
      color: "violet",
    },
    {
      name: "Javascript",
      proficiency: 5,
      color: "yellow",
    },
    {
      name: "React.Js",
      proficiency: 4,
      color: "blue",
    },
    {
      name: "Redux",
      proficiency: 4,
      color: "green",
    },
    {
      name: "Web3.js",
      proficiency: 3,
      color: "grey",
    },
  ];

  return (
    <div className="profile">
      <section>
        <h3>Introduction</h3>
        <p>
          Obi Onyedikachi is a computer science student of the University Of
          Lagos, A professional Front End Web Developer,and a Smart Contract
          developer, with Interest in extra activities such as Song writing and
          singing. get to know <span>Kachi</span> as you go around this
          Portfolio website.
        </p>
      </section>
      <section>
        <h3>Education / Training</h3>
        <ol>
          <li>
            {" "}
            <b>University of Lagos (Bsc. Computer Sciences)</b>- 2018 - 2024
          </li>
          <li>
            <b>Swirge Inc . (Front end Internship)</b>- June 2021- Jan 2022
          </li>
          <li>
            {" "}
            <b>Polygon BlockChain Bootcamp </b>- 2022
          </li>
        </ol>
      </section>
      <section>
        <h3>Kachi's Skill set</h3>
        <ol>
          <li>
            {" "}
            <b>HTML</b>
          </li>
          <li>
            {" "}
            <b>CSS</b>
          </li>
          <li>
            {" "}
            <b>SCSS:</b> CSS framework{" "}
          </li>
          <li>
            {" "}
            <b>Javascript</b>
          </li>
          <li>
            {" "}
            <b>React.JS</b>
          </li>
          <li>
            {" "}
            <b>Web3.js</b>
          </li>
          <li>
            {" "}
            <b>Redux toolkit :</b> State management tool
          </li>
          <li>
            {" "}
            <b>Solidity :</b> Smart Contract Programming language
          </li>
        </ol>
      </section>
      <section>
        <h3>Front End Skill Scale</h3>
        <Chart skills={FrontendSKill} />
      </section>
      <section>
        <h3>Blockchain Skill Scale</h3>
        <Chart
          skills={[{ name: "SOLIDITY", proficiency: 3, color: "black" }]}
        />
      </section>
      <section>
        <h3>Tools / Infastructure</h3>
        <Chart
          skills={[{ name: "git/github", proficiency: 4, color: "grey" },{name:'vscode',proficiency:4,color:'violet'}]}
        />
      </section>
    </div>
  );
};

const Chart = ({ skills }) => {
  return (
    <>
      <div className="chart">
        <div className="item header">
          {" "}
          <div className="name"></div>
          <div className="scale">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>
        {skills.map((skill) => (
          <div className="item ">
            {" "}
            <div className="name">{skill.name}</div>
            <div className="scale">
              <span
                style={{
                  width: `${skill.proficiency * 20}%`,
                  background: `${skill.color}`,
                  transition: "1s linear all",
                }}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
