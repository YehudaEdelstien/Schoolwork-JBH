import './App.css';
import Keyboard from './components/keyboard/Keyboard';
import InputArea from './components/InputArea/InputArea';
import OptionsBar from './components/OptionsBar/OptionsBar';

function App() {
  return (
    <div className="App">
      <OptionsBar />
      <InputArea />
      <Keyboard />
    </div>
  );
}

export default App;
