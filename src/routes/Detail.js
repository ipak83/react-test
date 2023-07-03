import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const getMovie = async () => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json.data.movie);
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
            {!loading ? (
            <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.large_cover_image}
                title={movie.title} 
                summary={movie.description_full} 
                genres={movie.genres} />
            ) : <h1>Loading</h1> }
        </div>
    );
}

export default Detail;