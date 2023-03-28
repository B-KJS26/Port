import styled from "styled-components";
import React from 'react';
import { SiPolymerproject } from 'react-icons/si';
import Sample from '../../images/sample.jpg';
import FadeIn from "react-fade-in/lib/FadeIn";
import ReactPlayer from "react-player";
export default function Project() {
    const [judgement, setJudgement] = React.useState(false);
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        if (window.scrollY > 2300) {
            setJudgement(true);
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
                    <SiPolymerproject className="sipoly"></SiPolymerproject>
                </Icons>
                <Title>프로젝트들</Title>
                <FirstProject>
                    <ReactPlayer
                        className="video"
                        url='videos/JJOK.mp4'
                        controls={true}
                        width="55%"
                    >
                    </ReactPlayer>
                    <FirstTitle>WELBATO</FirstTitle>
                    <BlackLine></BlackLine>
                    <FirstSub>학교에 다니는 학생들에게 양질의 정보(학사일정, 급식, 시간표 등)를 제공함으로써 학생들의 학교생활 질 향상을 위해 만든 웹 서비스입니다.</FirstSub>
                    <Mores>More</Mores>
                </FirstProject>
                <SecondProject>
                    <ReactPlayer
                        className="videos"
                        url='videos/KKM.mp4'
                        controls={true}
                        width="55%"
                    >
                    </ReactPlayer>
                    <Textbox>
                        <SecondTitle>꼬꼬막</SecondTitle>
                        <BlackLine2></BlackLine2>
                        <SecondSub>꼬꼬막은 동네 안에서 사용자끼리 옷을 대여하고 교환할 수 있는 웹 / 앱 서비스입니다. 누구나 자신이 잘 안 입는 옷을 대여해주거나, 크리스마스와 같은 특별한 날에만 입고 싶은 옷을 대여할 수 있습니다.</SecondSub>
                    </Textbox>
                </SecondProject>
                <ThirdProject>
                    <ReactPlayer
                        className="video"
                        url='videos/spotify.mkv'
                        controls={true}
                        width="55%"
                    >
                    </ReactPlayer>
                    <FirstTitle>SpotifyClone</FirstTitle>
                    <BlackLine></BlackLine>
                    <FirstSub>평소에 스포티파이를 좋아하는데, 갑작스럽게 스포티파이 클론 코딩을 해보면 어떨까 라는 생각이 떠올라서 시작하게 되었다. 스포티파이 홈페이지를 그대로 똑같이 클론한 것이 아니라 내 마음대로 한 번 커스텀 마이징 해보았다.</FirstSub>
                </ThirdProject>
            </FadeIn>
        </Projectpage>
    );
}
const Mores = styled.h1`
    position: absolute;
    margin-left: 75vw;
    margin-top: 13vw;
    font-family: Nexa;
    cursor: pointer;
    &:hover {
        transform: scale(1.3);
        transition: all ease-in-out .5s;
    }
`
const ThirdProject = styled.div`
    position: absolute;
    width: 80vw;
    height: 30vw;
    margin-left: 7.5vw;
    margin-top: 175vh;
    text-align: left;
    justify-content: center;
    .video {
        margin-top: -2vw;
        margin-left: -4vw;
        position: absolute;
    }
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
    .videos {
        margin-top: -2vw;
        margin-left: 45vw;
        position: absolute;
    }
`
const FirstSub = styled.p`
    position: absolute;
    font-family: Efa;
    margin-left: 42vw;
    font-size: 1.8vw;
    z-index: 3;
`
const BlackLine = styled.div`
    width: 40vw;
    height: 0.6vh;
    background-color: black;
    margin-left: 42vw;
    margin-top: 3vh;
`
const FirstTitle = styled.h1`
    position: absolute;
    font-family: Efa;
    margin-left: 42vw;
    margin-top: -5vh;
    font-size: 2.5vw;

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
    width: 80vw;
    height: 30vw;
    margin-left: 7.5vw;
    margin-top: 30vh;
    text-align: left;
    justify-content: center;
    .video {
        margin-top: -2vw;
        margin-left: -4vw;
        position: absolute;
    }
`
const Icons = styled.div`
    position: absolute;
    margin-left: 0.3vw;
    margin-top: 5vh;
    .sipoly{
        width: 7vw;
        height: 3.5vw;
    }
`
const Title = styled.div`
    position: absolute;
    font-family: Efa;
    font-size: 2.8vw;
    margin-left: 7vw;
    margin-top: 5.5vh;
`
const Projectpage = styled.div`
    width: 100%;
    height: 260vh;
    background-size: cover;
    opacity: 100%;
`
