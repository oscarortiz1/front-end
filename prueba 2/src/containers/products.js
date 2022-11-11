import styled from 'styled-components'
import images from '../assets'

const Products = () => {
  return (
    <ProductsStyled>
      <section>
        <h2>También pueden interesarte</h2>
        <div class='grid-section'>
          <div class='container'>
            <img class='img-product' src={images.rectangle2} alt='product' />
            <h3>Ático Dúplex de Obra Nueva</h3>
            <p>Marianao, Sant Boi de Llobregat</p>
            <div class='flex-section'>
              <div class='flex-icon'>
                <div>
                  <img class='icon' src={images.webMaterial11} alt='expand' />
                  <p>102m^</p>
                </div>
                <div>
                  <img class='icon' src={images.webMaterial10} alt='sleep' />
                  <p>3</p>
                </div>
                <div>
                  <img class='icon' src={images.webMaterial09} alt='toilet' />
                  <p>2</p>
                </div>
              </div>
              <p class='price'>330.000€</p>
              <button>Más info</button>
            </div>
          </div>
          <div class='container'>
            <img class='img-product' src={images.rectangle2} alt='product' />
            <h3>Ático Dúplex de Obra Nueva</h3>
            <p>Marianao, Sant Boi de Llobregat</p>
            <div class='flex-section'>
              <div class='flex-icon'>
                <div>
                  <img class='icon' src={images.webMaterial11} alt='expand' />
                  <p>102m^</p>
                </div>
                <div>
                  <img class='icon' src={images.webMaterial10} alt='sleep' />
                  <p>3</p>
                </div>
                <div>
                  <img class='icon' src={images.webMaterial09} alt='toilet' />
                  <p>2</p>
                </div>
              </div>
              <p class='price'>330.000€</p>
              <button>Más info</button>
            </div>
          </div>
        </div>
      </section>
    </ProductsStyled>
  )
}

const ProductsStyled = styled.div`
  h2 {
    color: #2d2d2d;
    font-size: 2rem;
    font-weight: 700;
    margin: 4rem auto -3rem 5%;
  }

  .grid-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-content: center;
    grid-gap: 20px;
    margin: 4rem;
  }
  .container h3 {
    color: rgb(255, 89, 0);
    font-weight: 900;
    font-size: 1.5rem;
    margin: 0.5rem auto 0rem auto;
  }

  .container {
    margin: 1rem;
  }

  .container p {
    color: rgb(190, 190, 190);
    margin: 0;
    font-size: 1.25rem;
  }

  .flex-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flex-icon {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
  .flex-icon p {
    text-align: center;
  }
  .flex-icon div {
    margin: auto;
  }
  .flex-icon img {
    width: 50px;
  }
  .flex-section .price {
    color: grey;
    font-weight: bold;
    font-size: 2rem;
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

  @media screen and (max-width: 1100px) {
    h2 {
      color: #2d2d2d;
      font-size: 2rem;
      font-weight: 700;
      margin: 4rem auto -3rem 4rem;
    }
    .grid-section {
      grid-template-columns: 1fr;
    }
    .img-product {
      width: 100%;
    }
    .container h3 {
      font-size: 2rem;
    }
  }
  .container p {
    font-size: 1.5rem;
  }
`

export default Products
