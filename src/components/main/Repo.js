import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Repo.css";

const Repo = ({ repo }) => {
  const { name } = useParams();
  const [languages, setLanguages] = useState([]);

  const getLanguages = async () => {
    try {
      const response = await axios(
        `https://api.github.com/repos/${name}/${repo.name}/languages`,
        {
          headers: {
            Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      setLanguages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <div className="repo">
      <div className="repo-name-container">
        <h5>{repo.name}</h5>
        <p>{repo.description}</p>
        <div className="lang-container">
          {Object.keys(languages).map((lang) => {
            return (
              <p key={lang} className="lang">
                {lang}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Repo;
