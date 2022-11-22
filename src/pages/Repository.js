import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Information from "../components/main/Information";
import RepoList from "../components/main/RepoList";
import "../pages/Repository.css";
import Loader from "../components/main/Loader";

const Repository = () => {
  const { name } = useParams();
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfRepos, setNumberOfRepos] = useState(10);
  const [totalPages, setTotalPages] = useState([]);
  const nav = useNavigate();
  const [user, setUser] = useState({});

  const getHeader = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${name}`, {
        headers: {
          Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
        },
      });

      let data = Math.ceil(response.data.public_repos / numberOfRepos);
      if (data === 0) {
        data = 1;
      }

      const arr = Array.from({ length: data }, (_, index) => index + 1);

      setTotalPages(arr);
      setUser(response.data);
    } catch (error) {
      alert("PLEASE ENTER A VALID USERNAME!");
      nav("/");
    }
  };

  const getRepos = async () => {
    setIsLoading(true);
    try {
      const repos = await axios.get(
        `https://api.github.com/users/johnpapa/repos?page=${currentPage}&per_page=${numberOfRepos}`,
        {
          headers: {
            Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );

      if (repos.status === 200) {
        setIsLoading(false);
      }
      setRepos(repos.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRepos();
  }, [currentPage, numberOfRepos]);

  useEffect(() => {
    getHeader();
  }, [numberOfRepos]);

  return (
    <>
      <div className="main">
        <div className="sub1">
          <Information userInfo={user} />
        </div>
        <div className="sub2">
          {isLoading ? <Loader /> : ""}

          <RepoList repos={repos} />
          <div className="pagination-con">
            <div className="page-options">
              <div className="changer-btns">
                <button
                  className={`page-button ${
                    currentPage === 1 ? "button-disabled" : ""
                  }`}
                  disabled={currentPage === 1 ? true : false}
                  onClick={() => {
                    setCurrentPage((prev) => prev - 1);
                  }}
                >
                  Previous
                </button>
                <div className="pages">
                  {totalPages.map((ele, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentPage(ele);
                        }}
                        className={`${
                          ele === currentPage ? "current-page" : ""
                        } page-number `}
                      >
                        {ele}
                      </button>
                    );
                  })}
                </div>
                <button
                  disabled={
                    currentPage ===
                      Math.round(user.public_repos / numberOfRepos) ||
                    Math.ceil(user.public_repos / numberOfRepos) === 1
                  }
                  className={`page-button ${
                    currentPage ===
                      Math.ceil(user.public_repos / numberOfRepos) ||
                    Math.ceil(user.public_repos / numberOfRepos) === 1
                      ? "button-disabled"
                      : ""
                  }`}
                  onClick={() => {
                    setCurrentPage((prev) => prev + 1);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repository;
