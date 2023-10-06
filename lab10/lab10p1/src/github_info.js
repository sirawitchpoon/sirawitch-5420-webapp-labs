import React from 'react';

export const GitHubInfo = ({ users }) => {
  return (
    <div className="github-info">
      <h1>{users.alt}</h1>
      <img src={users.imgURL} alt={users.alt} width='85px' height='75px' />
      <br />
      <a href={users.url} target="_blank" rel="noopener noreferrer">
        <h2>GitHub repository</h2>
      </a>
    </div>
  );
};
