import { useState } from 'react'
import styled from 'styled-components'
import images from '../assets'

const Carrusel = () => {
  const [current, setCurrent] = useState(0)

  const imagesArray = [images.rectangle1, images.rectangle1, images.rectangle1]

  const increment = () => {
    setCurrent(current === imagesArray.length - 1 ? 0 : current + 1)
    console.log(current)
  }

  const decrement = () => {
    setCurrent(current === 0 ? imagesArray.length - 1 : current - 1)
    console.log(current)
  }

  return (
    <CarruselStyled>
      <div className='carrusel'>
        <div className='carrusel__item'>
          <button className='prev' onClick={() => decrement()}></button>
          <img src={imagesArray[current]} alt='product'></img>
          <button className='next' onClick={() => increment()}></button>
        </div>
        <div className='section_buttons'>
          {imagesArray.map((_, index) => (
            <button
              className={index === current ? ' active' : 'inactive'}
              onClick={() => setCurrent(index)}
              key={index}
            ></button>
          ))}
        </div>
      </div>
    </CarruselStyled>
  )
}

const CarruselStyled = styled.div`
  position: relative;
  img {
    width: 100%;
    max-width: 800px;
  }
  .carrusel__item button {
    width: 70px;
    height: 70px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .prev {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: url(${images.arrow_prev}) no-repeat center;
    background-size: 50%;
  }
  .next {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: url(${images.arrow_next}) no-repeat center;
    background-size: 50%;
  }
  .section_buttons {
    position: relative;
    top: -3rem;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 15px;
      height: 15px;
      border-radius: 100px;
      border: none;
      margin: 0 0.5rem;
      cursor: pointer;
      border-radius: 100%;
    }
    .active {
      background-color: #fff;
    }
    .inactive {
      background-color: transparent;
      border: 2px solid white;
    }
  }
  @media screen and (min-width: 800px) {
    img {
      width: 100%;
      max-width: 100%;
    }
    .carrusel__item button {
      width: 100px;
      height: 100px;
    }
    .prev {
      background: url(${images.arrow_prev}) no-repeat center;
      background-size: 70%;
    }
    .next {
      background: url(${images.arrow_next}) no-repeat center;
      background-size: 70%;
    }
  }
`

export default Carrusel
