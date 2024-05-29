import { useState, useEffect } from 'react'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import api from '../../services/api'
import {Background, Container, Info, Poster, ContainerButtons} from './styles'
import Slider from '../../components/Slider';
import {getImages} from '../../utils/getImages'



function Home () {
    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
    const [topMovies, setTopMovies] = useState();
    const [topSeries, setTopSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [popularPeople, setPopularPeople] = useState();

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

    async function getTopSeries(){
        const {data: {results}} = await api.get('/tv/top_rated')

        console.log(results)
        setTopSeries(results)
    }

    async function getPopularSeries(){
        const {data: {results}} = await api.get('/tv/popular')

        console.log(results)
        setPopularSeries(results)
    }

    async function getPopularPeople(){
        const {data: {results}} = await api.get('/person/popular')

        console.log(results)
        setPopularPeople(results)
    }


    getMovies()
    getTopMovies()
    getTopSeries()
    getPopularSeries()
    getPopularPeople()
   },[])

    return (
        <>
        {movie && (
        <Background img={getImages(movie.backdrop_path)}>
            {showModal && (
             <Modal movieId={movie.id} setShowModal={setShowModal} />)}
            <Container>
                <Info>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <ContainerButtons>
                        <Button red >Assista agora</Button>
                        <Button onClick={() => setShowModal(true)}>Assista o trailer</Button>
                    </ContainerButtons>
                </Info>
                <Poster>
                    <img src={getImages(movie.poster_path)} alt="Capa-do-filme" />
                </Poster>
            </Container>
        </Background>
        )}
        {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
        {topSeries && <Slider info={topSeries} title={'Top Series'} />}
        {popularSeries && <Slider info={popularSeries} title={'Series populares'} />}
        {popularPeople && <Slider info={popularPeople} title={'Artistas populares'} />}
        </>
    )
}

export default Home;