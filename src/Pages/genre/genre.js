import '../Main/Header/film_menu.css'


export const Genre = ({genre}, {movie}) => {


    const submit = () => {
if (movie.genre_ids[''] && genre.name && genre.id)

    return console.log('kukku')

    }

    return (
        <div>
            <button onClick={submit}  className='a'>{genre.name}</button>
        </div>
    );
};

