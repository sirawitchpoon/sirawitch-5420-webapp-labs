import React from 'react';
import './App.css';
import { GitHubInfo } from './github_info.js';
import { PopularGitHubInfo } from './github_info.js';
import { users } from './users.js';

const popularUsers = users.filter(user => user.followers > 10000);

const App = () => {
  const userItems =[];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    if (user.followers > 10000) {
      userItems.push(
        <li key={i}>
          <PopularGitHubInfo users={user} />
        </li>
      );
    } else {
      userItems.push(
        <li key={i}>
          <GitHubInfo users={user} />
        </li>
      );
    }
  }

  return (
    <div className="App">
      <h1>Sample Github Repository</h1>
      <ol>
        {userItems}
      </ol>
    </div>
  );
}

export default App;
