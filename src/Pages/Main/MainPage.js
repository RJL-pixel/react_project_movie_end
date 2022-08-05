import {MoviesList} from "../Movie.card/movie.card";
import {Header} from "./Header/Header";
import './Header/film_menu.css'

function MainPage() {

    function toggleDarkTheme() {
        return document.body.classList.toggle('dark-theme');
    }
    return (
        <div className='full_main'>


            <Header/>
<MoviesList/>

        </div>
    );
}

export  {MainPage};