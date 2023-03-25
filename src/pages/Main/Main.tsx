import styled from 'styled-components';
import Ligradient from '../../images/111.png';
import Profilepic from '../../images/profile.jpg';
import Github from '../../images/github.png';
import Velog from '../../images/velog.jpg';
import Notions from '../../images/notion.png';
import FadeIn from 'react-fade-in';
import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';
import './Main.scss';
export default function Main() {
    const [judge, setJudge] = React.useState(true);
    function nexted() {
        window.scrollTo({ top: 930, behavior: 'smooth' });
    }
    function velog() {
        window.location.href = 'https://velog.io/@digyrh456789';
    }
    function github() {
        window.location.href = 'https://github.com/B-KJS26';
    }
    function notioning() {
        window.location.href = 'https://www.notion.so/70843f63a76440f9b6338b3cf92b1351';
    }
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        if (window.scrollY < 700) {
            setJudge(true);
        }
        else {
            setJudge(false);
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    }, []);
    return (
        <Maining>
            <FadeIn
                delay={30}
                visible={judge}
            >
                <DecoLine></DecoLine>
                <DecoBox></DecoBox>
            </FadeIn>
            <FadeIn
                delay={100}
                visible={judge}
            >
                <Bloging>
                    <Imageone onClick={github}></Imageone>
                    <Imagetwo onClick={velog}></Imagetwo>
                    <Imagethree onClick={notioning}></Imagethree>
                </Bloging>
                <FadeIn delay={150} visible={judge}>
                    <Title>KIM JUNSEO</Title>
                    <Subtitle>Frontend Developer</Subtitle>
                    <CircleB></CircleB>
                </FadeIn>
                <div className={scrollPosition < 100 ? "wrapping" : "nowrapping"}>
                    <BsArrowDownCircle size="3vw" className='botarrow' onClick={nexted} />
                </div>
            </FadeIn>
        </Maining>
    );
}

const Bloging = styled.div`
    position: absolute;
    width: 30vw;
    height: 10vh;
    margin-left: 10vw;
    margin-top: 57vh;
`
const Imageone = styled.div`
    position: absolute;
    width: 5vw;
    height: 5vw;
    margin-left: 0vw;
    border-radius: 5vw;
    background-image: url(${Github});
    background-size: cover;
    z-index: 5;
    cursor: pointer;
`
const Imagetwo = styled.div`
    position: absolute;
    width: 5vw;
    height: 5vw;
    margin-left: 7vw;
    border-radius: 5vw;
    background-image: url(${Velog});
    background-size: cover;
    z-index: 5;
    cursor: pointer;
`
const Imagethree = styled.div`
    position: absolute;
    width: 5vw;
    height: 5vw;
    margin-left: 14vw;
    border-radius: 5vw;
    background-image: url(${Notions});
    background-size: cover;
    z-index: 5;
    cursor: pointer;
`
const CircleB = styled.img.attrs({
    src: `${Profilepic}`
})`
    width: 50px;
    height: 30px;
    position: absolute;
    width: 25vw;
    height: 36vw;
    margin-left: 63vw;
    margin-top: 14vh;
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
    font-size: 5vw;
    color: white;
`
const Subtitle = styled.h1`
    position: absolute;
    margin-top: 48vh;
    margin-left: 10.2vw; 
    font-family: Nexabold;
    font-size: 2vw;
    color: white;
`

