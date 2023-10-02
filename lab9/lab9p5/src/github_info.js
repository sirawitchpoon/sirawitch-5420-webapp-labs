import React from 'react';
import './App.css';

export const GitHubInfo = ({ users }) => {
  return (
    <div className="github-info">
    <p><img src={users.imgURL} alt={users.alt} width='170px' height='150px' /><a href={users.url} target="_blank" rel="noopener noreferrer">{users.alt}</a> Followers: {users.followers}</p>
    </div>
  );
};
