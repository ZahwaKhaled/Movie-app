import './MovieCard.css'
import { addToFav, Count } from './Store/CartAction';
import { RemoveFromFav } from './Store/CartAction'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function MovieCard(props) {
    const favourite = useSelector((state) => state.CartReducer.Cart)
    const dispatch = useDispatch()
    const addToFavourite = (movie) => {
        const find = favourite.includes(movie)
        if (!find) {
            dispatch(addToFav(favourite.push(movie)))
            dispatch(Count(favourite.length))
        }
    }
    return (
        <>
            <br />
            <div className="card" style={{ width: "28rem", margin: "auto" }}>
                <img src={props.poster_path} style={{ height: "550px" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" id="title" style={{
                        fontWeight: "bold", fontFamily: "Georgia, 'Times New Roman', Times, serif", textShadow: "3px 5px 5px slateblue",
                    }}>{props.title}</h5>
                    <p className="card-text" id="overview">{props.overview}</p>
                    <h6 className="card-text text-danger" style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", float: "left" }}>Rate :{props.vote_average}/10</h6>
                    <Link id="view" className="nav-link" to={`/Movies/`}>
                        <button type="submit" id="m" className="btn btn-md btn-block">Back </button>
                    </Link>
                    <button className='btn' id="m" style={{ width: "10rem", marginLeft: "4.5rem" }} onClick={() => (addToFavourite(props))}>Add To Favourite</button>

                </div>
            </div>
        </>
    )
}
export default MovieCard;
