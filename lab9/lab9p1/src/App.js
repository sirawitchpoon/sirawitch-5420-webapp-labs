const githubUsername = 'sirawitchpoon';
const avatarUrl = `https://avatars.githubusercontent.com/${githubUsername}`;
const repoUrl = `https://github.com/${githubUsername}`;

function GitHubAvatar() {
  return (
    <img
      src={avatarUrl}
      alt="GitHub Avatar"
      style={{ display: 'block', margin: '0 auto' }}
    />
  );
}

function GitHubRepoURL() {
  return (
    <a href={repoUrl} target="_blank" style={{ display: 'block', textAlign: 'center' }}>
      My GitHub repository
    </a>
  );
}

const App = () => {
  const appStyle = {
    textAlign: 'center'
  };

  return (
    <div style={appStyle}>
      <h1>My GitHub Information</h1>
      <GitHubAvatar/>
      <br>
      </br>
      <GitHubRepoURL/>
    </div>
  );
};

export default App;