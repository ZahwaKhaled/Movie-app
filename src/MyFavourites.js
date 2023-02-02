import './MovieCard.css'
import { useSelector, useDispatch } from 'react-redux';
import { RemoveFromFav } from './Store/CartAction';
import { Count } from './Store/CartAction'

function MyFavourites(props) {
    console.log(favourite)
    const dispatch = useDispatch();
    const favourite = useSelector((state) => state.CartReducer.Cart)

    const delMovie = (movie) => {
        console.log(movie.id)
        const movieIndex = favourite.getIndex(elem => elem.id === movie.id)
        if (movieIndex > -1) {
            dispatch(RemoveFromFav(favourite.splice(movieIndex, 1)))
            dispatch(Count(favourite.length))
        }

    }
    return (
        <>
            <div >
                <div className="container">
                    <div className="row ">
                        <div className="col-3 ">
                            <img className="card-img-top img" src={props.poster_path} />
                        </div>
                        <div className="col-5">
                            <h5 className="text-warning">{props.title}</h5>
                            <p className="text">{props.overview}</p>
                            <button className="btn" id="m" onClick={() => (delMovie(props))}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyFavourites;