// import logo from './logo.svg';
import Form from './components/Form';
import Login from './components/Login';
import './App.css';
import {Route,Routes,Navigate} from 'react-router-dom';

function App() {
  return (
   <>
    <Routes>
      <Route path='/signup' element={<Form/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Navigate to='/signup'/>}></Route>
    </Routes>

   </>
  );
}

export default App;
