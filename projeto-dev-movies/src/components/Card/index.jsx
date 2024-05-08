import {getImages} from '../../utils/getImages'
import { Container } from './styles'

function Card({ item }) {
    return (
      <Container>
        <img src={getImages(item.poster_path)} />
        <h2>{item.original_title}</h2>
      </Container>
    )
}
export default Card