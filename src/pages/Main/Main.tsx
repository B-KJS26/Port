import styled from 'styled-components';
import Ligradient from '../../images/111.png';
import Profilepic from '../../images/profile.jpg';

export default function Main() {
    function nexted() {
        window.scrollTo({ top: 930, behavior: 'smooth' });
    }
    return (
        <Maining>
            <DecoLine></DecoLine>
            <Title>MINJUN MAN</Title>
            <Subtitle>Frontend Developer</Subtitle>
            <Morebutton onClick={nexted}>watch more</Morebutton>
            <CircleB></CircleB>
            <DecoBox></DecoBox>
        </Maining>
    );
}

const CircleB = styled.div`
    position: absolute;
    width: 30vw;
    height: 72vh;
    margin-left: 57vw;
    margin-top: 14vh;
    background-color: black;
    background-image: url(${Profilepic});
    background-size: cover;
    z-index: 3;
`


const Maining = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    text-align: left;
    justify-content: center;
    background-image: url(${Ligradient});
    background-size: 100% 100%;
    background-repeat: no-repeat;
`
const DecoLine = styled.div`
    position: absolute;
    width: 40vw;
    height: 0.5vh;
    background-color: white;
    margin-left: 10vw;
    margin-top: 13vh;
    @media (max-width: 100px) {
        width: 10px;
        height: 10px;
    }
`
const DecoBox = styled.div`
    position: absolute;
    width: 1.5vw;
    height: 3vh;
    background-color: white;
    margin-left: 10vw;
    margin-top: 85vh;
`
const Title = styled.h1`
    position: absolute;
    margin-top: 36vh;  
    margin-left: 10vw; 
    font-family: Nexa;
    font-size: 6rem;
    color: white;
`
const Subtitle = styled.h1`
    position: absolute;
    margin-top: 48vh;
    margin-left: 10.2vw; 
    font-family: Nexabold;
    font-size: 2rem;
    color: white;
`


const Morebutton = styled.button`
    position: absolute;
    margin-left: 10vw;
    margin-top: 64vh;
    height: 6vh;
    width: 12vw;
    border: 4px;
    border-style: solid;
    border-color: white;
    border-radius: 3rem;
    background-color: #ffffff;
    background-color: rgba( 255, 255, 255, 0);
    color: white;
    font-family: Nexaheavy;
    font-size: 1.8rem;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: .6s;
    }
`
