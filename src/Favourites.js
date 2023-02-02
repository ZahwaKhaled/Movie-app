import './MovieCard.css'
import { useSelector, useDispatch } from 'react-redux'
import { RemoveFromFav } from './Store/CartAction';
import { Count } from './Store/CartAction'

function Favourites() {
    const ApiImg = "https://image.tmdb.org/t/p/w500/";
    const favourite = useSelector((state) => state.CartReducer.Cart)
    const dispatch = useDispatch();

    const delMovie = (movie) => {
        console.log(movie.id)
        const movieIndex = favourite.findIndex(elem => elem.id === movie.id)
        if (movieIndex > -1) {
            dispatch(RemoveFromFav(favourite.splice(movieIndex, 1)))
            dispatch(Count(favourite.length))
        }

    }

    return (
        <>

            <div >
                <div className="container" >
                    {favourite.map((movies) => {
                        return (
                            //     <MyFavourites key={movies.id} poster_path={ApiImg + movies.poster_path}
                            //         id={movies.id}
                            //         title={movies.original_title}
                            //         overview={movies.overview} />
                            // )
                            <div className="row mt-3" style={{border:"2px solid white",boxShadow: "3px 5px  10px slateblue"}} >
                                <div className="col-3 " key={movies.id}>
                                    <img className="card-img-top img" style={{ height: "350px" }} src={ApiImg + movies.poster_path} />
                                </div>
                                <div className="col-5">
                                    <br/><br/><br/>
                                    <h5 className="text" style={{
                                        fontWeight: "bold", fontFamily: "Georgia, 'Times New Roman', Times, serif", textShadow: "3px 5px 5px slateblue",
                                    }}>{movies.title}</h5>
                                    <p className="text" style={{ fontFamily:" Georgia, 'Times New Roman', Times, serif",textAlign: "start"}}>{movies.overview}</p>
                                <button className="btn" id="m" onClick={() => (delMovie(movies))}>Remove</button>
                            </div>
                            </div>
                )
                    })}

            </div>
        </div>


        </>
    )
}
export default Favourites;