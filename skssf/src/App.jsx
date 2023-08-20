import './App.scss';
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { nav } from './Constants/Router';
function App() {
  const LoginPage=React.lazy(()=>import ('./Pages/Login/Login'))
  return (
    <div className="App">
      <Suspense fallback={<p>Loading ....</p>}>
      <Routes>
        <Route path={nav.LOGIN} exact element={<LoginPage/>}/>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
