import styled from "styled-components"
import React from 'react';
import Profilepic from '../../images/profile.jpg';
import FadeIn from "react-fade-in/lib/FadeIn";
export default function Who() {
    function nexted() {
        window.scrollTo({ top: 1860, behavior: 'smooth' });
    }
    const [judgement, setJudgement] = React.useState(false);
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        if(window.scrollY > 400 && window.scrollY < 1600) {
            setJudgement(true);
        }
        else {
            setJudgement(false);
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    }, []);
    return (
        <Whopage>
            <FadeIn
                visible={judgement}
            >
            <Profileimage></Profileimage>
            <Subed>소통을 좋아하며 사소한 일들에도 최선을 다하는</Subed>
            <Name><Big>김준서</Big>입니다.</Name>
            <Pinkline></Pinkline>
            <Blackline></Blackline>
            <Introduction>
                <Intro>
                    프론트엔드 개발자를 희망하고 있습니다.<br/>
                    사람들과 소통하며 서로 의견을 나누는 것을 좋아합니다.<br/>
                    모든 일에 최선을 다하며 타인의 목소리를 경청하고, 받아들일 수 있는 개발자가 되기 위해 노력하고 있습니다.
                </Intro>
            </Introduction>
            <Pack onClick={nexted}>
                <Mores>More</Mores>
                <Arrowing>{'>'}</Arrowing>
            </Pack>
            </FadeIn>
        </Whopage>
    )
}

const Pinkline = styled.div`
    position: absolute;
    width: 8.5vw;
    height: 1vh;
    margin-left: 44.5vw;
    margin-top: 36vh;
    background-color: pink;
`
const Pack = styled.div`
position: absolute;
margin-left: 87vw;
margin-top: 80vh;
cursor: pointer;
`
const Big = styled.span`
    font-size:3rem;
`
const Mores = styled.h1`
    position: absolute;
    font-family: Nexabold;
    color: black;
    &::after {position: absolute; content:""; display: block; border-bottom: 3px solid #000; transition: .6s; left: 50%; width: 0;}
    &:hover::after {width: 120%; left: 0; right: auto;}
`
const Arrowing = styled.h1`
    position: absolute;
    margin-left: 4.5vw;
    color: black;
`
const Name = styled.h1`
    position: absolute;
    font-family: Efa;
    font-size: 2.5rem;
    margin-left: 45vw;
    margin-top: 30vh;
`
const Subed = styled.p`
    position: absolute;
    font-family: Efa;
    font-size: 2rem;
    margin-left: 45vw;
    margin-top: 25vh;
`
const Introduction = styled.div`
    position: absolute;
    font-family: Efa;
    overflow: hidden;
    margin-left: 45.1vw;
    margin-top: 45vh;   
    width: 43vw;
    height: 40vh;
`
const Blackline = styled.div`
    position: absolute;
    width: 50vw;
    height: 0.3vh;
    margin-left: 42vw;
    margin-top: 41vh;
    background-color: black;
`
const Intro = styled.p`
    font-size: 2rem;
`
const Whopage = styled.div`
    position: absolute;
    width: 100%;
    height: 930px;
    margin-top: 930px;
`
const Profileimage = styled.div`
position: absolute;
width: 30vw;
height: 72vh;
margin-left: 8vw;
margin-top: 14vh;
background-image: url(${Profilepic});
background-size: cover;
z-index: 3;
`