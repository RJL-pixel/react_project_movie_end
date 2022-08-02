import './film_menu.css'
import {useNavigate} from "react-router-dom";



function Header() {
    const navigate = useNavigate();
    return (
        <div className="head_main">
        <div>

            <a href='/'>
                <img
                    src='https://cdn.discordapp.com/attachments/986692882104737824/1003937664472449094/Yatehfilm_free-file_4.png'
                    alt='yatexfilm'

                />
            </a>

        </div>




            <div className="sec-center">
                <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
                <label className="for-dropdown" htmlFor="dropdown">Фільми</label>
                <div className="section-dropdown">
                    <button onClick={()=>{navigate("/Film")}} className='a'>Dropdown Link</button>
                    <button className='a'>Dropdown Link</button>
                    <button className='a'>Dropdown Link</button>
                    <button  className='a' >Dropdown Link</button>
                </div>
            </div>










</div>
    );
}

export  {Header};