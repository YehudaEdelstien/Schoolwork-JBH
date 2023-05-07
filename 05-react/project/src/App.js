import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import ToDos from './components/dashboard/pages/ToDos';
import Info from './components/dashboard/pages/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path='*' element={<Info />} />
            <Route path="todos" element={<ToDos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
