
import Signup from './Component/Signup/Signup';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Login from './Component/Login/Login';
import Main from './Component/MainPage/Main';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/contact' element={<Main/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
