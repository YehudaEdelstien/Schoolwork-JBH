import { BrowserRouter} from "react-router-dom"
import Explorer from './components/Explorer'

import './pico.css'

function App() {
  return (
    <BrowserRouter>
        <Explorer />
    </BrowserRouter>
  );
}

export default App;
