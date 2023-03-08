import styled from 'styled-components';
import Ligradient from '../../images/111.png';
export default function Main() {
    return(
        <Maining>
            <DecoBox></DecoBox>
            <Title>KIM HyeonJe</Title>
            <Subtitle>Frontend Developer</Subtitle>
            <DecoBox2></DecoBox2>
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
const DecoBox = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: white;
    margin-left: 100px;
    margin-top: 100px;
`
const DecoBox2 = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: white;
    margin-left: 100px;
    margin-top: 805px;
`
const Title = styled.h1`
    position: absolute;
    margin-top: 280px;  
    margin-left: 100px; 
    font-family: Nexa;
    font-size: 130px;
    color: white;
`
const Subtitle = styled.p`
    position: absolute;
    margin-top: 450px;
    margin-left: 100px; 
    font-family: NexaLight;
    font-size: 70px;
    color: white;

`