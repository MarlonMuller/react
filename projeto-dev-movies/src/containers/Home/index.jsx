import api from '../../services/api'
import {Background, Info, Poster, Container} from './styles'
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
            <Container>
                <Info>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <div>
                        <Button>Assista agora</Button>
                        <Button>Assista ao trailer</Button>
                    </div>
                </Info>
                <Poster>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Capa-do-filme" />
                </Poster>
            </Container>
        </Background>
        )}
        </>
    )
}

export default Home;