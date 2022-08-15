
import Signup from './Component/Signup/Signup';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Login from './Component/Login/Login';
import Main from './Component/MainPage/Main';
import Import from "./Component/ImportFile/Import"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/contact' element={<Main/>}></Route>
        <Route path='/import' element={<Import/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
