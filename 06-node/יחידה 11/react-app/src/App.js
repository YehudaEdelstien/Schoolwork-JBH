import { BrowserRouter} from "react-router-dom"
import Explorer from './components/Explorer'

import './pico.css'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Explorer />
    </BrowserRouter>
  );
}

export default App;
