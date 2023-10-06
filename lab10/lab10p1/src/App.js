import { useState } from "react";
import { users } from "./users"
import "./App.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showFollowers, setShowFollowers] = useState(false);

  let hasPrevious = index > 0;
  let hasNext = index < users.length - 1;

  function handlePreviousClick() {
    if (hasPrevious) {
      setIndex(index - 1);
      setShowFollowers(false);
    }
  }
  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
      setShowFollowers(false);
    }
  }

  function handleShowFollowerClick() {
    setShowFollowers(!showFollowers);
  }

  let user = users[index];
  return (
    <>
      <h1>
        Sample GitHub Repository
      </h1>
      <h2>
        <a href={user.url} target="_blank" rel="noopener noreferrer">
          {user.alt}
        </a>
      </h2>
      <img 
        src={user.imgURL} 
        alt={user.alt}
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
          <span>{user.followers}</span>
        )}
      </div>
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