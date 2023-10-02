import React from 'react';
import './App.css';
import { GitHubInfo } from './github_info.js';
import { users } from './users.js';

const popularUsers = users.filter(user => user.followers > 10000);

const App = () => {
  return (
    <div className="App">
      <h1>Popular Github Repository</h1>
      <ol>
        {popularUsers.map((user, index) => (
          <li key={index}>
            <GitHubInfo users={user} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
