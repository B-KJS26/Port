import styled from 'styled-components';
import Ligradient from '../../images/111.png';
export default function Main() {
    return(
        <Maining>
            <Title>KIMJUNSEO</Title>
        </Maining>
    );
}
const Maining = styled.div`
    position: absolute;
    height: 930px;
    width: 100%;
    top: 0;
    text-align: left;
    justify-content: center;
    background-image: url(${Ligradient});
    background-size: 100% 100%;
    background-repeat: no-repeat;
`
const Title = styled.text`
    font-family: Nexa;
    font-size: 80px;
    color: white;
`