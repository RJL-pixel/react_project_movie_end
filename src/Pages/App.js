
import '../App.css'
import {Routes, Route} from "react-router-dom";

import RegisterPages from "./AUTH_Pages/register.pages";
import LoginPages from "./AUTH_Pages/login.pages";
import {NavLink} from "react-router-dom";


import {MainPage} from "./Main/MainPage";





function App() {

  return (


      <div>
          <NavLink to={'movies'}>Movies</NavLink>
          <Routes>
             <Route  path={''} exact element={<RegisterPages/>}/>
              <Route  path={'/login'} element={<LoginPages/>}/>

              <Route path={'movies'} element={<MainPage/>}/>









          </Routes>








      </div>

  );

}

export {App};
