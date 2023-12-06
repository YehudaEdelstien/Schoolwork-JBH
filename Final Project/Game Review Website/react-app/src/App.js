import { BrowserRouter, Route, Routes} from "react-router-dom"

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
