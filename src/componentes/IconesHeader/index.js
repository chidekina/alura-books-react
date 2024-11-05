import profile from '../../imagens/perfil.svg';
import cart from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icons =styled.ul `
  display: flex;
  align-items: center;
  gap: 40px;
`

const Icon = styled.li`
  width: 25px;
`

const icons = [profile, cart];

export default function IconesHeader() {
    return (
        <Icons>
        {icons.map((icon) => (
          <Icon><img src={icon}></img></Icon>
        ))}
       </Icons>
    )
}