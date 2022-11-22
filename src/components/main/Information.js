import React from "react";
import "../css/Information.css";
import { AiFillGithub } from "react-icons/ai";
import { ImLocation, ImTwitter } from "react-icons/im";
import { BiWorld } from "react-icons/bi";
import { fadeIn, fadeInLeft, bounceIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";

const Information = ({ userInfo }) => {
  return (
    <FadeInDiv className="info-card">
      <BounceInDiv className="image-container">
        <img src={userInfo.avatar_url} alt="avatar" />
        <p>{userInfo.login}</p>
        <h3>{userInfo.name}</h3>
        <div className="link-container">
          <AiFillGithub className="icon" />
          <p>{userInfo.html_url}</p>
        </div>
      </BounceInDiv>
      <FadeInLeftDiv className="info-container">
        {userInfo.bio ? <p className="desc">{userInfo.bio}</p> : ""}
        {userInfo.blog ||
        userInfo.location ||
        userInfo.twitter_username ||
        userInfo.followers ||
        userInfo.following ||
        userInfo.public_repos ? (
          <div className="links">
            {userInfo.blog ? (
              <div className="blog">
                <BiWorld className="icon-blog" />
                <p>{userInfo.blog}</p>
              </div>
            ) : (
              ""
            )}
            {userInfo.location ? (
              <div className="location">
                <ImLocation className="icon" />
                <p>{userInfo.location}</p>
              </div>
            ) : (
              ""
            )}
            {userInfo.twitter_username ? (
              <div className="twitter">
                <ImTwitter className="icon-twitter" />
                <p> {userInfo.twitter_username}</p>
              </div>
            ) : (
              ""
            )}
            <div>
              {userInfo.followers ? (
                <p className="bar">
                  <FaUsers className="follow-icon" />
                  <div className="dot"></div>
                  <span className="bar-number">{userInfo.followers}</span>
                  <div className="user-followers">Followers</div>
                </p>
              ) : (
                ""
              )}
              {userInfo.following ? (
                <p className="bar">
                  <FaUserFriends className="follow-icon" />
                  <div className="dot"></div>
                  <span className="bar-number">{userInfo.following}</span>
                  <div className="user-followers">Following</div>
                </p>
              ) : (
                ""
              )}
              {userInfo.public_repos ? (
                <p className="bar">
                  <RiGitRepositoryFill className="follow-icon" />
                  <div className="dot"></div>
                  <span className="bar-number">{userInfo.public_repos}</span>
                  <div className="user-followers">Repositories</div>
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </FadeInLeftDiv>
    </FadeInDiv>
  );
};

export default Information;

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const BounceInAnimation = keyframes`${bounceIn}`;

export const FadeInDiv = styled.div`
  animation: 2s ${fadeInAnimation};
`;
export const FadeInLeftDiv = styled.div`
  animation: 2s ${fadeInLeftAnimation};
`;
export const BounceInDiv = styled.div`
  animation: 2s ${BounceInAnimation};
`;
