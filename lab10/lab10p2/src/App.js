import './App.css';
import { useState } from 'react';

function App() {
  const [university, setUniversity] = useState();
  return (
    <div>
      <h1>Forms with Names</h1>
      <div className='form-container'>
        <input defaultValue={"Manee"}/>
        <label>studies in</label>
        <input defaultValue={"KKU"} value={university} onChange={e => setUniversity(e.target.value)}/>
      </div>
      <div className='form-container'>
        <input defaultValue={"Manee"}/>
        <label>studies in</label>
        <input defaultValue={"KKU"} value={university} onChange={e => setUniversity(e.target.value)}/>
      </div>
    </div>
  );
};

export default App;
