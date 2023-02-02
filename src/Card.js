import './MovieCard.css'
import { addToFav, Count } from './Store/CartAction';
import { RemoveFromFav } from './Store/CartAction'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Cards(props) {

    const favourite = useSelector((state) => state.CartReducer.Cart)
    const dispatch = useDispatch()
    const addFav = (movie) => {
        const find = favourite.includes(movie)
        if (!find) {
            dispatch(addToFav(favourite.push(movie)))
            dispatch(Count(favourite.length))
        }
    }


    return (
        <div className='card '>
            <img className="card-img-top img" src={props.poster_path} />
            <div className="card-body">
                <h3 className="card-title">{props.id}</h3>
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.overview}</p>
                <h5 className="card-text">{props.vote_average}</h5>
                <button className='btn btn-success' onClick={() => (addFav(props.movie))}>Add To Favourite</button>
            </div>
        </div>

    )
}

export default Cards;