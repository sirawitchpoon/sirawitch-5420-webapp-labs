import './App.css';
import {GitHubInfo} from './github_info.js'
import {users} from './users.js'

export default function App() {

return (
  <div className="App">
    <GitHubInfo users={users[0]} />
    <GitHubInfo users={users[1]} />
    <GitHubInfo users={users[2]} />
  </div>
)
}