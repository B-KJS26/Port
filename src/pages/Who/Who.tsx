import styled from "styled-components"
import React from 'react';
import Profilepic from '../../images/profile.jpg';
export default function Who() {
    return(
        <Whopage>
            <Profileimage></Profileimage>
            <Name>MINJUN MAN</Name>
            <Subed>Frontend Developer</Subed>
            <Blackline></Blackline>
            <Introduction>
                <Intro>
                    안녕하세요 저는 리액트로 웹을 개발하는 민준맨입니다.
                </Intro>
            </Introduction>
            <Mores></Mores>
        </Whopage>
    )
}

const Mores = styled.h1`
    position: absolute;
    margin-left: 45vw;
    margin-top: 25vh;
`
const Name = styled.h1`
    position: absolute;
    font-family: Nexablack;
    font-size: 5rem;
    margin-left: 45vw;
    margin-top: 25vh;
`
const Subed = styled.p`
    position: absolute;
    font-family: Nexabold;
    font-size: 1rem;
    margin-left: 45.2vw;
    margin-top: 25vh;
`
const Introduction = styled.div`
    position: absolute;
    font-family: Efa;
    overflow: hidden;
    margin-left: 45.1vw;
    margin-top: 40vh;   
    width: 43vw;
    height: 40vh;
    word-break: break-all;
`
const Blackline = styled.div`
    position: absolute;
    width: 50vw;
    height: 0.3vh;
    margin-left: 42vw;
    margin-top: 40vh;
    background-color: black;
`
const Intro = styled.p`
    font-size: 3.5rem;
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