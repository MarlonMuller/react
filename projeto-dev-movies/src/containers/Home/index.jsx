import api from '../../services/api'
import {Background} from './styles'
import { useEffect, useLayoutEffect, useState } from 'react';

function Home () {
    const [movie, setMovie] = useState();

   useEffect (() => {

    async function getMovies(){
        const {data: {results}} = await api.get('/movie/popular')

        setMovie(results[1])
    }

    getMovies()

   },[])

    return (
        <>
        {movie && (
        <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </Background>
        )}
        </>
    )
}

export default Home;