import { useState, useEffect } from 'react'

import Button from '../../components/Button'
import api from '../../services/api'
import {Background, Container, Info, Poster, ContainerButtons} from './styles'
import Slider from '../../components/Slider';



function Home () {
    const [movie, setMovie] = useState();
    const [topMovies, setTopMovies] = useState();

   useEffect (() => {

    async function getMovies(){
        const {data: {results}} = await api.get('/movie/popular')

        setMovie(results[0])
    }

    async function getTopMovies(){
        const {data: {results}} = await api.get('/movie/top_rated')

        console.log(results)
        setTopMovies(results)
    }

    getMovies()
    getTopMovies()
   },[])

    return (
        <>
        {movie && (
        <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
            <Container>
                <Info>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <ContainerButtons>
                        <Button red >Assista agora</Button>
                        <Button>Assista o trailer</Button>
                    </ContainerButtons>
                </Info>
                <Poster>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Capa-do-filme" />
                </Poster>
            </Container>
        </Background>
        )}
        {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
        </>
    )
}

export default Home;