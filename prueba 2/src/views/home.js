import styled from 'styled-components'
import Carrusel from '../containers/carrusel'
import CarruselInfo from '../containers/carrusel-info'
import Header from '../containers/header'
import Products from '../containers/products'

const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <Carrusel />
      <CarruselInfo />
      <Products />
    </HomeStyled>
  )
}

const HomeStyled = styled.div``

export default Home
