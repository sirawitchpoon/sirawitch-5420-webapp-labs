import React, { useState, useEffect } from "react";
import { usernames } from "./users";
import axios from "axios";
import "./App.css";

export default function App() {

  //These 2 const below this was from my Lab 10 Problem 1
  const [index, setIndex] = useState(0);
  const [showFollowers, setShowFollowers] = useState(false);

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = usernames[index];
        const result = await axios(`https://api.github.com/users/${username}`);
        setUserInfo(result.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [index]);


  //The rest below this was from my Lab 10 Problem 1

  const hasPrevious = index > 0;
  const hasNext = index < usernames.length - 1;

  const handlePreviousClick = () => {
    if (hasPrevious) {
      setIndex(index - 1);
      setShowFollowers(false);
    }
  };

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
      setShowFollowers(false);
    }
  };

  const handleShowFollowerClick = () => {
    setShowFollowers(!showFollowers);
  };

  return (
    <>
      <h1>
        Sample GitHub Repository
      </h1>
      {userInfo && (
        <>
          <h2>
            <a href={userInfo.html_url} target="_blank" rel="noopener noreferrer">
              {userInfo.login}
            </a>
          </h2>
          <img 
            src={userInfo.avatar_url} 
            alt={userInfo.login}
          />
          <br/>
          <div className="showFollowerButtonContainer">
            <button
              className="showFollowersButton"
              onClick={handleShowFollowerClick}
            >
              {showFollowers ? 'Hide' : 'Show'} followers
            </button>
            {showFollowers && (
              <span>{userInfo.followers}</span>
            )}
          </div>
        </>
      )}
      <div className="nextPrevButtonContainer">
        <button 
          className="previousButton" 
          onClick={handlePreviousClick} 
          disabled={!hasPrevious}
        >
          Previous
        </button>
        <button
          className="nextButton"
          onClick={handleNextClick} 
          disabled={!hasNext}
        >
          Next
        </button>
      </div>
    </>
  );
}
