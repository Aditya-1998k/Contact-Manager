
import Signup from './Component/Signup/Signup';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Login from './Component/Login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
