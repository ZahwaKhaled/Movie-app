import axios from "axios";
import { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { MovieAction } from "./Store/MovieAction";
import Card from './Card';
import "./Movies.css"
import { addToFav, Count } from './Store/CartAction';
import { RemoveFromFav } from './Store/CartAction'
function Movies(props) {

    const [movies, setmoviesList] = useState([])
    const moviesList = useSelector((state) => state.MoviesReducer.list)
    const ApiImg = "https://image.tmdb.org/t/p/w500/";
    let [MovieData, setMovieData] = useState(1)
    const favourite = useSelector((state) => state.CartReducer.Cart)
    const dispatch = useDispatch()
    const addToFavourite = (movie) => {
        const find = favourite.includes(movie)
        if (!find) {
            dispatch(addToFav(movie))
            dispatch(Count(favourite.length))
        }
    }
    // useEffect(() => {
    //     axios.get("https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c")
    //         .then((data) => setmoviesList(data.data.results))
    //         .catch((err) => console.log(err))
    // }, [])
    useEffect(() => {
       
        dispatch(MovieAction(MovieData))
    }, [MovieData])

    return (
        <>
            {/* {moviesList} */}
            {/* <ChangeLang/> */}
            <ul>
                <div className="row ">
                    {moviesList.map((singleMovie) => {
                        return (
                            <div className="col col-sm-3">
                                <div className="card-body">
                                    <br />
                                    <li key={singleMovie.id}>
                                        <div className="card" style={{ width: "23rem", margin: "auto" }}>
                                            <img src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}?api_key=1583bd4a7b0da462480c756403c9bc65`} style={{ height: "650px" }} className="card-img-top" alt="..." />
                                            <h5 className="card-title" id="title" >{singleMovie.title}</h5>
                                            {/* <p className="card-text" id="overview">{singleMovie.overview}</p> */}
                                            <Link id="view" className="nav-link" to={`/MovieDetails/${singleMovie.id}`}>
                                                <button type="submit" id="m" className="btn btn-md btn-block">Movie details</button>
                                            </Link>
                                            <button className='btn' id="m" style={{width:"10rem",marginLeft:"5.5rem"}} onClick={() => (addToFavourite(singleMovie))}>Add To Favourite</button>

                                        </div>
                                    </li>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </ul>
            < button className="btn " id="m" onClick={() => setMovieData(MovieData > 1 ? --MovieData : 1)}>&laquo;Previous</button>
            < button className="btn " id="m" onClick={() => setMovieData(++MovieData)}>Next&raquo;</button>
          
        </>
    )
}
export default Movies;