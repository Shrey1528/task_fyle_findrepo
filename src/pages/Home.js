import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { BsGithub, BsSearch } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiAngular, SiJavascript } from "react-icons/si";

const Home = () => {
  let navigate = useNavigate();
  const [repoName, setRepoName] = useState("");

  const handleSubmit = () => {
    navigate(`/${repoName}`);
  };

  return (
    <>
      <div className="home">
        <div className="form-container">
          <img src="../assets/login.jpg" alt="" />
          <div className="image"></div>
          <div className="form">
            <h1>FindRepo</h1>
            <input
              type="text"
              placeholder="Enter Github Username..."
              value={repoName}
              onChange={(e) => {
                setRepoName(e.target.value);
              }}
            />
            {repoName ? (
              <button className="btn-search" onClick={handleSubmit}>
                <BsSearch className="search" />
              </button>
            ) : (
              <p className="enter"></p>
            )}
          </div>
        </div>
        <BsGithub className="git" />
        <AiFillHtml5 className="html" />
        <FaCss3Alt className="css" />
        <FaJava className="java" />
        <SiAngular className="angular" />
        <SiJavascript className="javascript" />
        <FaReact className="react" />
        <FaPython className="python" />
      </div>
    </>
  );
};

export default Home;
