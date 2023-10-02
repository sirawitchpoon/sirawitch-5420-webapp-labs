import { GitHubAvatar, GitHubRepoURL} from "./github_data.js";
import './App.css';

function App() {
  const appStyle = {
    textAlign: 'center'
  };
  const userInfo = {
    name: 'Sirawitch Butryojantho',
    repositoryUrl: 'https://github.com/sirawitchpoon',
    imgURL: 'https://avatars.githubusercontent.com/sirawitchpoon', 
    alt: 'Your GitHub Avatar',
  };
  return (
    <div style={appStyle}>
      <h1>{userInfo.name}</h1>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={200}/>
      <GitHubRepoURL url={userInfo.repositoryUrl}/>
    </div>
  );
}

export default App;
