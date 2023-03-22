import styled from "styled-components";
import React from 'react';
import { SiPolymerproject } from 'react-icons/si';
import Sample from '../../images/sample.jpg';
import FadeIn from "react-fade-in/lib/FadeIn";
export default function Project() {
    const [judgement, setJudgement] = React.useState(false);
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        if (window.scrollY > 2300) {
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
        <Projectpage>
            <FadeIn
                visible={judgement}
            >
                <Icons>
                    <SiPolymerproject size={70}></SiPolymerproject>
                </Icons>
                <Title>프로젝트들</Title>
                <FirstProject>
                    <FirstImage></FirstImage>
                    <FirstTitle>JJOK</FirstTitle>
                    <BlackLine></BlackLine>
                    <FirstSub>학교에 다니는 학생들에게 양질의 정보(학사일정, 급식, 시간표 등)를 제공함으로써 학생들의 학교생활 질 향상을 위해 만든 웹 서비스입니다.</FirstSub>
                </FirstProject>
                <SecondProject>
                    <SecondImage></SecondImage>
                    <Textbox>
                        <SecondTitle>꼬꼬막</SecondTitle>
                        <BlackLine2></BlackLine2>
                        <SecondSub>꼬꼬막은 동네 안에서 사용자끼리 옷을 대여하고 교환할 수 있는 웹 / 앱 서비스입니다. 누구나 자신이 잘 안 입는 옷을 대여해주거나, 크리스마스와 같은 특별한 날에만 입고 싶은 옷을 대여할 수 있습니다.</SecondSub>
                    </Textbox>
                </SecondProject>
                <ThirdProject>
                    <FirstImage></FirstImage>
                    <FirstTitle>건강하게해조</FirstTitle>
                    <BlackLine></BlackLine>
                    <FirstSub>코로나 19로 인한 사람들의 줄어든 운동량을 늘리기 위해 집이나, 집 근처에서 사람들과 함께 게임형식으로 경쟁하면서 운동할 수 있으면 어떨까? 라는 생각에서 출발해 만들어진 앱 서비스 입니다.</FirstSub>
                </ThirdProject>
            </FadeIn>
        </Projectpage>
    );
}

const ThirdProject = styled.div`
    position: absolute;
    width: 75vw;
    height: 30vw;
    margin-left: 7.5vw;
    margin-top: 175vh;
    text-align: left;
    justify-content: center;
`
const BlackLine2 = styled.div`
    width: 40vw;
    height: 0.6vh;
    background-color: black;
    margin-top: 3vh;
`
const Textbox = styled.div`
    width: 37vw;
    height: 40vh;
`
const SecondSub = styled.p`
    font-family: Efa;
    font-size: 2rem;
    z-index: 3;
`
const SecondTitle = styled.h1`
    font-family: Efa;
    margin-top: -5vh;
    font-size: 3rem;
`
const SecondImage = styled.img.attrs({
    src: `${Sample}`
})`
    position: absolute;
    width: 33vw;
    height: 35vh;
    border-radius: 20px;
    margin-left: 47vw;
    box-shadow: 5px 10px 10px 5px;
`;
const SecondProject = styled.div`
    position: absolute;
    width: 75vw;
    height: 30vw;
    margin-left: 7.5vw;
    margin-top: 100vh;
    text-align: left;
    justify-content: center;
`
const FirstSub = styled.p`
    position: absolute;
    font-family: Efa;
    margin-left: 40vw;
    font-size: 2rem;
    z-index: 3;
`
const BlackLine = styled.div`
    width: 40vw;
    height: 0.6vh;
    background-color: black;
    margin-left: 40vw;
    margin-top: 3vh;
`
const FirstTitle = styled.h1`
    position: absolute;
    font-family: Efa;
    margin-left: 40vw;
    margin-top: -5vh;
    font-size: 3rem;

`
const FirstImage = styled.img.attrs({
    src: `${Sample}`
})`
    position: absolute;
    width: 33vw;
    height: 35vh;
    border-radius: 20px;
    box-shadow: 5px 10px 10px 5px;
`;
const FirstProject = styled.div`
    position: absolute;
    width: 75vw;
    height: 30vw;
    margin-left: 7.5vw;
    margin-top: 30vh;
    text-align: left;
    justify-content: center;
`
const Icons = styled.div`
    position: absolute;
    margin-left: 2vw;
    margin-top: 5vh;
`

const Title = styled.div`
    position: absolute;
    font-family: Efa;
    font-size: 3rem;
    margin-left: 7vw;
    margin-top: 6vh;
`
const Projectpage = styled.div`
    position: absolute;
    width: 100%;
    height: 2530px;
    margin-top: 2790px;
    background-size: cover;
    opacity: 100%;
`
