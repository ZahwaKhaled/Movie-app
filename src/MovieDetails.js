import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieDetails() {
    const param = useParams()
    // console.log(param)
    const ApiImg = "https://image.tmdb.org/t/p/w500/";
    const [movies, setMovies] = useState({})
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=1583bd4a7b0da462480c756403c9bc65`)
            .then((movie) => setMovies(movie.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            {/* <h1> Movie details</h1> */}
            {/* {movies.original_title} */}
            <MovieCard key={movies.id} poster_path={ApiImg + movies.poster_path} overview={movies.overview} title={movies.original_title} vote_average= {movies.vote_average} />
        </>
    )
}
export default MovieDetails;