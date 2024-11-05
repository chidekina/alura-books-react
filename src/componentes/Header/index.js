import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`

export default function Header() {
    return (
        <HeaderContainer>  
            <Logo/> 
            <OpcoesHeader/>
            <IconesHeader/>
       </HeaderContainer>
    )
}