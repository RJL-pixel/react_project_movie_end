
import '../App.css'
import {Routes, Route} from "react-router-dom";

import RegisterPages from "./AUTH_Pages/register.pages";


function App() {


  return (


      <div>
          <Routes>
             <Route  path={''} element={<RegisterPages/>}/>









          </Routes>
      </div>

  );

}

export {App};
