import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Notes } from './components/Notes';
function App() {
  return (
    <div className="App">
      <h1>Notes taking Application</h1>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/notes' element={<Notes/>}/>
      </Routes>
    </div>
  );
}

export default App;
