import styled from "styled-components";
import React from 'react';
import { SiPolymerproject } from 'react-icons/si';
import Sample from '../../images/sample.jpg';
export default function Project() {
    return(
        <Projectpage>
            <Icons>
                <SiPolymerproject size={70}></SiPolymerproject>
            </Icons>
            <Title>프로젝트들</Title>
            <FirstProject>
                <FirstImage></FirstImage>
                <FirstTitle>이런</FirstTitle>
                <BlackLine></BlackLine>
                <FirstSub>이런날에 너 같은 민준들은 지옥에서 불타야해. 빠빠빠빠 빠빠빠 빠빠빠빠 빠빠빠빠 빠빠빠</FirstSub>
            </FirstProject>
        </Projectpage>
    );
}

const FirstSub = styled.p`
    position: absolute;
    font-family: Efa;
    margin-left: 38vw;
    font-size: 2rem;
    z-index: 3;
`
const BlackLine = styled.div`
    width: 40vw;
    height: 0.6vh;
    background-color: black;
    margin-left: 38vw;
    margin-top: 3vh;
`
const FirstTitle = styled.h1`
    position: absolute;
    font-family: Efa;
    margin-left: 38vw;
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
    height: 2030px;
    margin-top: 2790px;
    background-size: cover;
    opacity: 100%;
`
