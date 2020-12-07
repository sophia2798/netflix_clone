import React, { useState, useEffect } from 'react';
import axios from "../../utils/axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const posterBaseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // a snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        // if brackets empty [], run once when the row loads, and don't run again
        // if populate bracket [movies], will run again every time movies changes
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            console.log("title",movie.title,"name",movie.name)
            movieTrailer(movie?.name || movie?.title || "")
            .then((url) => {
                console.log(url);
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams.get('v'));
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error));
        };
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => {
                    return <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${posterBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}/>
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row