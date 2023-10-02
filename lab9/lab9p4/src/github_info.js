import React from 'react';

export const GitHubInfo = ({ users }) => {
  return (
    <div className="github-info">
      <img src={users.imgURL} alt={users.alt} width='100px' height='85px' />
      <a href={users.url} target="_blank" rel="noopener noreferrer">
        {users.alt}
      </a>
    </div>
  );
};

export const PopularGitHubInfo = ({ users }) => {
  return (
    <div className="popular-github-info">
      <img src={users.imgURL} alt={users.alt} width='85px' height='75px' />
      <a href={users.url} target="_blank" rel="noopener noreferrer">
        {users.alt} ({users.followers} followers)
      </a>
    </div>
  );
};
