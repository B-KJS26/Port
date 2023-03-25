import styled from "styled-components"
import React from 'react';
import Profilepic from '../../images/profile.jpg';
import FadeIn from "react-fade-in/lib/FadeIn";
import { media } from "../../styles/media";
export default function Who() {
    function nexted() {
        window.scrollTo({ top: 1860, behavior: 'smooth' });
    }
    const [judgement, setJudgement] = React.useState(false);
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        if (window.scrollY > 400) {
            setJudgement(true);
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
                <Subed>소통을 좋아하며 모든 일에 최선을 다하는</Subed>
                <Name><Big>김준서</Big>입니다.</Name>
                <Pinkline></Pinkline>
                <Blackline></Blackline>
                <Introduction>
                    <Intro>
                        프론트엔드 개발자를 희망하고 있습니다.<br />
                        사람들과 소통하며 서로 의견을 나누는 것을 좋아합니다.<br />
                        모든 일에 최선을 다하고, 사람들의 목소리를 귀담아 들으며,
                        다른 사람들의 관점에서 생각하고 이해할 수 있는 개발자가 되기 위해 노력하고 있습니다.
                    </Intro>
                </Introduction>
                <Pack onClick={nexted}>
                    <Mores>More</Mores>
                </Pack>
            </FadeIn>
        </Whopage>
    )
}

const Pinkline = styled.div`
    position: absolute;
    width: 7.5vw;
    height: 0.5vw;
    margin-left: 44.5vw;
    margin-top: 17.5vw;
    background-color: pink;
`
const Pack = styled.div`
position: absolute;
margin-left: 87vw;
margin-top: 80vh;
cursor: pointer;
`
const Big = styled.span`
    font-size: 2.5vw;
`
const Mores = styled.h1`
    font-family: Nexabold;
    font-size: 1.5vw;
    color: black;
    &::after {position: absolute; content:""; display: block; border-bottom: 3px solid #000; transition: .6s; left: 50%; width: 0;}
    &:hover::after {width: 100%; left: 0; right: auto;}
`
const Name = styled.h1`
    position: absolute;
    font-family: Efa;
    font-size: 2vw;
    margin-left: 45vw;
    margin-top: 14.7vw;
`
const Subed = styled.p`
    position: absolute;
    font-family: Efa;
    font-size: 2vw;
    margin-left: 45vw;
    margin-top: 12vw;
    ${media.tablet`
    font-size: 1px;
    color: yellow;
  `}
`
const Introduction = styled.div`
    position: absolute;
    font-family: Efa;
    overflow: hidden;
    margin-left: 45.1vw;
    margin-top: 45vh;   
    width: 43vw;
    height: 20vw;
`
const Blackline = styled.div`
    position: absolute;
    width: 50vw;
    height: 0.2vw;
    margin-left: 42vw;
    margin-top: 20vw;
    background-color: black;
`
const Intro = styled.p`
    font-size: 1.5vw;
    line-height: 3.5vh;
`
const Whopage = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 48vw;
`
const Profileimage = styled.img.attrs({
    src: `${Profilepic}`
})`
    position: absolute;
    width: 25vw;
    height: 36vw;
    margin-left: 8vw;
    margin-top: 14vh;
    background-size: cover;
    z-index: 3;
`;
