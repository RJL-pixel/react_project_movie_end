
import './App.css'
import {Routes, Route} from "react-router-dom";

import RegisterPages from "./Pages/AUTH_Pages/register.pages";
import LoginPages from "./Pages/AUTH_Pages/login.pages";



import {MainPage} from "./Pages/Main/MainPage";
import {MovieDetails} from "./Pages/movie.details";



// Робив на скору руку, сорі за безпорядок :)
//Дефолтний пароль і логін 'qwert' якщо не можете зареєструватись введіть /movies в url


function App() {

  return (


      <div>

          <Routes>
             <Route  path={''} exact element={<RegisterPages/>}/>
              <Route  path={'/login'} element={<LoginPages/>}/>

              <Route path={'movies'} element={<MainPage/>}/>

              <Route path={'movies/:id'} element={<MovieDetails/>}/>







          </Routes>








      </div>

  );

}

export {App};
