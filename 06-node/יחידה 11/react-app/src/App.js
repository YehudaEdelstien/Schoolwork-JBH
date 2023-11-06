import { BrowserRouter} from "react-router-dom"
import NavBar from './components/NavBar'

import './pico.css'

function App() {
  return (
    <BrowserRouter>
        <NavBar />
    </BrowserRouter>
  );
}

export default App;
