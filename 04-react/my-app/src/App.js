import './App.css';

import {default as Component} from './components/4/labelButton/labelButton.js';

function App() {
  return (
    <div>
      <Component arr={testArr}/>
    </div>
  );
}

export default App;

const testArr = Array.from(Array(10).keys())