import styled, { keyframes } from "styled-components";
import { SiStackblitz } from 'react-icons/si';
import { DiReact, DiJavascript1 } from 'react-icons/di';
import { TbBrandTypescript } from 'react-icons/tb';
import FadeIn from "react-fade-in/lib/FadeIn";
import React from 'react';
export default function What() {
    const [judgement, setJudgement] = React.useState(false);
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        if (window.scrollY > 1200) {
            setJudgement(true);
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    }, []);
    return (
        <Whatpage>
            <FadeIn
                visible={judgement}
            >
                <Icons>
                    <SiStackblitz className="thunder"></SiStackblitz>
                </Icons>
                <Title>주로 사용하는 기술들</Title>
            </FadeIn>
            <FadeIn
                visible={judgement}
            >
                <FirstSkill>
                    <Icon>
                        <DiReact className='reacticon'></DiReact>
                    </Icon>
                    <Text>React</Text>
                    <Explanation>
                        <Extext>
                            <Tex>
                                제가 리액트를 주로 쓰는 이유는 웹 개발 언어로 리액트를 먼저 접한 것도 있지만, 리액트로 웹 페이지를 만들면 HTML보다 전체 프로그램 설계를 깔끔하고 일관성있게 정리할 수 있는 편리한 조직성이 마음에 들었기 때문입니다.
                            </Tex>
                        </Extext>
                    </Explanation>
                </FirstSkill>
                <SecondSkill>
                    <Icon2>
                        <TbBrandTypescript className='typescripting'></TbBrandTypescript>
                    </Icon2>
                    <Texts>Typescript</Texts>
                    <Explanation>
                        <Extext>
                            <Tex>
                                리액트만 써오다가 타입스크립트를 쓴지는 얼마 안된 일입니다. 리액트만 쓰다보니 타입스크립트 쓰는것은 미숙하지만, 리액트와 비슷하며 코드 작성 단계에서 타입을 체크해 오류를 확인하고 미리 타입을 결정하기 때문에 실행 속도도 빨라서 잘 다루기 위해서 노력하고 있습니다.
                            </Tex>
                        </Extext>
                    </Explanation>
                </SecondSkill>
            </FadeIn>
        </Whatpage>
    );
}

const Tex = styled.h1`
    font-size: 1.5vw;
    font-family: Fall;
    font-weight: lighter;
    text-align: left;
    margin-top: 3vw;
    justify-content: center;
    letter-spacing: 4px;
`
const Extext = styled.div`
    position: absolute;
    width: 56vw;
    margin-left: 2vw;
    margin-top: 3vh;
    height: 28vw;
    transition: all ease-in-out .2s;
`
const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
const SecondSkill = styled.div`
    position: absolute;
    width: 20vw;
    height: 17vw;
    margin-left: 10vw;
    background-color: aliceblue;
    margin-top: 60vh;
    border-radius: 10px 0px 0px 10px;
    transition: all ease .5s;
    z-index: 1;
    justify-content: center;
    text-align: center;
`
const Text = styled.p`
    position: absolute;
    text-align: center;
    font-family: Nexabold;
    font-size: 2.5vw;
    margin-top: 6vw;
    margin-left: 6.5vw;
`
const Texts = styled.p`
    position: absolute;
    text-align: center;
    font-family: Nexabold;
    font-size: 2.5vw;
    margin-top: 6vw;
    margin-left: 3.9vw;
`
const Explanation = styled.div`
    position: absolute;
    width: 60vw;
    margin-left: 20vw;
    height: 17vw;
    background-color: white;
    transition: all ease .5s;
    z-index: 2;
`
const Icon2 = styled.div`
    position: absolute;
    margin-left: 15vw;
    margin-top: 12vw;
    color: #007acc;
    animation: ${rotation} infinite 5s ease-in-out;
    .typescripting {
        position: relative;
        font-size: 4vw;
    }
`
const Icon = styled.div`
    position: absolute;
    margin-left: 7vw;
    margin-top: 5.5vw;
    color: #61dafc;
    animation: ${rotation} infinite 5s ease-in-out;
    .reacticon {
        position: relative;
        left: 6vw;
        top: 4vw;
        font-size: 6vw;
    }
`
const FirstSkill = styled.div`
    position: absolute;
    width: 20vw;
    height: 17vw;
    margin-left: 10vw;
    background-color: aliceblue;
    margin-top: 20vh;
    border-radius: 10px 0px 0px 10px;
    transition: all ease .5s;
    z-index: 1;
    justify-content: center;
    text-align: center;
`
const Icons = styled.div`
    position: absolute;
    margin-left: 2vw;
    margin-top: 5vh;
    .thunder {
        font-size: 4vw;
    }
`
const Title = styled.h1`
    position: absolute;
    font-family: Soojin;
    font-size: 3vw;
    margin-left: 7vw;
    margin-top: 6vh;
`
const Whatpage = styled.div`
    width: 100%;
    height: 50vw;
    background-size: cover;
    opacity: 100%;
    background-color: #e9ecef;
    transition: all ease-in-out .2s;
`
