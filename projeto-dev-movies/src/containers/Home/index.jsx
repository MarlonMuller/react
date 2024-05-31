import { useState, useEffect } from 'react'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import api from '../../services/api'
import { Background, Container, Info, Poster, ContainerButtons } from './styles'
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImages'
import { useNavigate } from 'react-router-dom'
import { getMovies, getTopMovies, getTopSeries, getPopularSeries, getPopularPeople } from '../../services/getData'



function Home() {
    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
    const [topMovies, setTopMovies] = useState();
    const [topSeries, setTopSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [popularPeople, setPopularPeople] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getPopularPeople()
            ])
                .then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
                    setMovie(movie)
                    setTopMovies(topMovies)
                    setTopSeries(topSeries)
                    setPopularSeries(popularSeries)
                    setPopularPeople(topPeople)
                })
                .catch((error) => console.error(error))
        }
        getAllData()
    }, [])

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
                                <Button red onClick={() => navigate(`/detalhes/${movie.id}`)}>Assista agora</Button>
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