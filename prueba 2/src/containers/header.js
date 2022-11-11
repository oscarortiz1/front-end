import styled from 'styled-components'
import images from '../assets'

const Header = () => {
  return (
    <HeaderStyled>
      <img className='arrow' src={images.icon_arrow} alt='back'></img>
      <img className='logo' src={images.grocasa} alt='logo'></img>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  margin: 2rem;
  .arrow {
    width: 30px;
  }
  .logo {
    width: 150px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (min-width: 800px) {
    .arrow {
      display: block;
      width: 40px;
    }
    .logo {
      width: 150px;
      margin-left: 3rem;
      transform: translateX(0%);
    }
  }
`

export default Header
