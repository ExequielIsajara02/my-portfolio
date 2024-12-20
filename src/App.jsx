import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<HomePage/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
