import styled from "styled-components";
import { SiStackblitz } from 'react-icons/si';
import { DiReact, DiJavascript1 } from 'react-icons/di';
import { TbBrandTypescript } from 'react-icons/tb';
import { RiFlutterFill } from 'react-icons/ri';
import { RiArrowDownSLine } from 'react-icons/ri';
import FadeIn from "react-fade-in/lib/FadeIn";
import React from 'react';
export default function What() {
    const [judgement, setJudgement] = React.useState(false);
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        if(window.scrollY > 1200 && window.scrollY < 2300) {
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
        <Whatpage>
            <FadeIn
                visible={judgement}
            >
            <Icons>
                <SiStackblitz size={70}></SiStackblitz>
            </Icons>
            <Title>사용하는 기술들</Title>
            </FadeIn>
            <FadeIn
                visible={judgement}
            >
            <FirstSkill>
                <Icon>
                    <DiReact size={65}></DiReact>
                </Icon>
                <Text>React</Text>
                <SecondIcon>
                    <RiArrowDownSLine size={45}></RiArrowDownSLine>
                </SecondIcon>
            </FirstSkill>
            <SecondSkill>
                <Icon>
                    <TbBrandTypescript size={65}></TbBrandTypescript>
                </Icon>
                <Text>TypeScript</Text>
                <SecondIcon>
                    <RiArrowDownSLine size={45}></RiArrowDownSLine>
                </SecondIcon>
            </SecondSkill>
            <ThirdSkill>
                <Icon>
                    <DiJavascript1 size={65}></DiJavascript1>
                </Icon>
                <Text>JavaScript</Text>
                <SecondIcon>
                    <RiArrowDownSLine size={45}></RiArrowDownSLine>
                </SecondIcon>
            </ThirdSkill>
            <FourSkill>
                <Icon>
                    <RiFlutterFill size={65}></RiFlutterFill>
                </Icon>
                <Text>Flutter</Text>
                <SecondIcon>
                    <RiArrowDownSLine size={45}></RiArrowDownSLine>
                </SecondIcon>
            </FourSkill>
            </FadeIn>
        </Whatpage>
    );
}

const FourSkill = styled.div`
    width: 80vw;
    height: 7vh;
    background-color: #ECE6CC;
    text-align: left;
    margin-left: 10vw;
    justify-content: center;
    border: 1px solid;
    border-radius: 0px 0px 10px 10px;
`

const ThirdSkill = styled.div`
    width: 80vw;
    height: 7vh;
    background-color: #ECE6CC;
    text-align: left;
    margin-left: 10vw;
    justify-content: center;
    border: 1px solid;
`

const SecondSkill = styled.div`
    width: 80vw;
    height: 7vh;
    background-color: #ECE6CC;
    text-align: left;
    margin-left: 10vw;
    justify-content: center;
    border: 1px solid;
    
`

const Text = styled.p`
    position: absolute;
    font-family: Nexabold;
    font-size: 2.5rem;
    margin-top: 0.2vh;
    margin-left: 4vw;
`
const SecondIcon = styled.div`
    position: absolute;
    margin-left: 76.5vw;
    margin-top: 1vh;
    transition: all ease 1s;
    cursor:pointer;
    &:hover {
            margin-top: 0.5vh;
            transform: rotate( 180deg );
    }
`
const Icon = styled.div`
    position: absolute;
`

const FirstSkill = styled.div`
    width: 80vw;
    height: 7vh;
    margin-left: 10vw;
    margin-top: 30vh;
    background-color: #ECE6CC;
    text-align: left;
    justify-content: center;
    border: 1px solid;
    border-radius: 10px 10px 0px 0px;
    transition: all ease .5s;
`

const Icons = styled.div`
    position: absolute;
    margin-left: 2vw;
    margin-top: 5vh;
`

const Title = styled.h1`
    position: absolute;
    font-family: Efa;
    font-size: 3rem;
    margin-left: 7vw;
    margin-top: 6vh;
`

const Whatpage = styled.div`
    position: absolute;
    width: 100%;
    height: 930px;
    margin-top: 1860px;
    background-size: cover;
    opacity: 100%;
    background-color: #e9ecef;
`
