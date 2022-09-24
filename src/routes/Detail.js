import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const {id} = useParams()
    // console.log(id);
    const getMovie = async () =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data);
        setLoading(false);
    }
    useEffect(()=>{
        getMovie();
    }, []);

    
    return <h1>Detail</h1>;
}
export default Detail;