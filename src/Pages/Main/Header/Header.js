
import './film_menu.css'
import {Genres} from "../../genre/genres";

function Header() {


    function toggleDarkTheme() {
        return document.body.classList.toggle('dark-theme');
    }

    return (
        <div className="head_main">
            <button className='checkbox' onClick={toggleDarkTheme} >Magic</button>
  <a href='/'>
                <img
                    src='https://cdn.discordapp.com/attachments/986692882104737824/1003937664472449094/Yatehfilm_free-file_4.png'
                    alt='yatexfilm'

                />
            </a>

            <div className="sec-center">
                <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
                <label className="for-dropdown" htmlFor="dropdown">Фільми</label>
                <div className="section-dropdown">
                <Genres/>
                </div>
            </div>









</div>
    );
}

export  {Header };