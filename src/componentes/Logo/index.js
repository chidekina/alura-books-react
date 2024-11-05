import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div `
  display: flex;
  font-size: 30px;
  gap: 10px;
`

export default function Logo() {
    return (
        <LogoContainer>
            <img 
            src={logo} 
            alt='Logo da Alura Books'
            className='logo-img'
            ></img>
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}