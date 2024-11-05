import styled from 'styled-components';

const Options = styled.ul `
    display: flex;
`

const Option = styled.li `
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    font-size: 16px;
`

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

export default function OpcoesHeader() {
    return (
    <Options>
        { textOptions.map((text) => (
          <Option><p>{text}</p></Option>
        ))}
    </Options>
    )
}