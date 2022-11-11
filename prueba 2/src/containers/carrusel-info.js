import { useState } from 'react'
import styled from 'styled-components'
import images from '../assets'

const CarruselInfo = () => {
  const [active, setActive] = useState(false)
  return (
    <CarruselInfoStyled>
      <section className='info'>
        <h3>Ático Dúplex de Obra Nueva</h3>
        <h4>Marianao, Sant Boi de Llobregat</h4>
        <p className='phone'>
          Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta
          de una planta con entrada al salón y final en terraza. El salón da
          entrada a la cocina y al pasillo que distribuye una de las
          habitaciones dobles y uno de los cuartos. de baño de tres piezas..
        </p>
        <p className='web'>
          Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta
          de una planta con entrada al salón y final en terraza. El salón da
          entrada a la cocina y al pasillo que distribuye una de las
          habitaciones dobles y uno de los cuartos. de baño de tres piezas..
          Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta
          de una planta con entrada al salón y final en terraza. El salón da
          entrada a la cocina y al pasillo que distribuye una de las
          habitaciones dobles y uno de los cuartos. de baño de tres piezas..
          Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta
          de una planta con entrada al salón y final en terraza. El salón da
          entrada a la cocina y al pasillo que distribuye una de las
          habitaciones dobles y uno de los cuartos. de baño de tres piezas..
        </p>
        <div className='flex-section'>
          <div>
            <div className='icon'>
              <img src={images.webMaterial11} alt=''></img>
              <p>102m^</p>
            </div>
            <div className='icon'>
              <img src={images.webMaterial10} alt=''></img>
              <p>3</p>
            </div>
            <div className='icon'>
              <img src={images.webMaterial09} alt=''></img>
              <p>2</p>
            </div>
          </div>
          <div className='second'>
            <div>
              <p className='price'>330.000€</p>
              <p className='ref'>Ref. 407499</p>
            </div>
            <img
              className='image'
              src={active ? images.webMaterial06 : images.webMaterial08}
              alt=''
              onClick={() => setActive(!active)}
            ></img>
          </div>
        </div>
        <div className='more_info'>
          <p>
            <strong>Características</strong>
            <p>
              Ático102 m2 (construidos) <br /> 3 Habitaciones
              <br /> Segunda mano100 m2 (útiles) <br />
              Reformado
              <br /> 2 Baños
            </p>
          </p>
          <p className='right'>
            <strong>Extras</strong>
            <p>
              Terraza <br /> Balcón
              <br /> Ascensor <br />
              Calefacción
              <br />
              Aire acondicionado
            </p>
          </p>
        </div>
        <img className='map' src={images.screenshot1} alt=''></img>
        <div className='contact'>
          <h3>Avísame si baja</h3>
          <button>Contactar</button>
        </div>
      </section>
    </CarruselInfoStyled>
  )
}

const CarruselInfoStyled = styled.div`
  margin: 0rem 2rem 2rem 2rem;
  .info {
    max-width: 800px;
  }

  h3 {
    color: rgb(255, 89, 0);
    font-weight: 900;
    font-size: 1.5rem;
    margin: 0.5rem auto 0rem auto;
  }
  h4 {
    color: rgb(190, 190, 190);
    margin: 0;
    font-size: 1.25rem;
  }
  p {
    color: gray;
    font-size: 1rem;
    margin: 0.5rem 0rem;
  }
  .web {
    display: none;
  }
  .flex-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0rem;
    div {
      display: flex;
      text-align: center;
      .icon {
        display: flex;
        flex-direction: column;
      }
    }
    img {
      width: 50px;
    }
    .second div {
      display: flex;
      flex-direction: column;
      margin: 0rem 1rem;
      .price {
        color: rgb(255, 89, 0);
        font-weight: 900;
        font-size: 1.5rem;
        margin: 0.5rem auto 0rem auto;
      }
      .ref {
        color: rgb(190, 190, 190);
        margin: 0;
        font-size: 1rem;
        text-align: right;
      }
    }
  }
  .map {
    width: 90%;
    margin: 1rem auto;
  }
  .contact {
    float: right;
    width: 400px;
    display: flex;
    margin-right: 3rem;
    h3 {
      font-size: 1.25rem;
    }
    button {
      background-color: white;
      color: rgb(255, 89, 0);
      border: 2px solid rgb(255, 89, 0);
      border-radius: 20px;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      font-weight: bold;
      cursor: pointer;
      width: 150px;
    }
  }
  @media screen and (min-width: 800px) {
    margin: 2rem auto auto 10%;
    h3 {
      font-size: 2rem;
    }
    .more_info {
      display: flex;
      .right {
        margin-left: 2rem;
      }
    }
    .web {
      display: block;
    }
    .phone {
      display: none;
    }
    .contact {
      margin-right: 5rem;
      h3 {
        font-size: 1.25rem;
      }
      button {
        background-color: white;
        color: rgb(255, 89, 0);
        border: 2px solid rgb(255, 89, 0);
        border-radius: 20px;
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        font-weight: bold;
        cursor: pointer;
        width: 150px;
      }
    }
  }
`

export default CarruselInfo
