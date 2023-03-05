import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function Header() {
    return (
        <Headers>
            <Title>
                KJS' Portfolio
            </Title>
            <Info>
                Who?
            </Info>
            <Goal>
                What?
            </Goal>
            <Project>
                Project?
            </Project>
        </Headers>
    );
}


const Headers = styled.div`
    position: fixed;
    height: 80px;
    width: 100%;
    max-width: 100%;
    display: flex;
    font-family: 'Ascrada', sans-serif, Arial;
    color: white;
    z-index: 2;
`

const Title = styled.h1`
    font-size: 60px;
    margin-top: 10px;
    margin-left: 30px;
    text-shadow: 5px 4px 10px black;
`
const Info = styled.text`
    font-size: 70px;
    margin-top: 5px;
    margin-left: 300px;
    text-shadow: 5px 4px 10px black;
    cursor: pointer;
`
const Goal = styled.text`
    font-size: 70px;
    margin-top: 5px;
    margin-left: 100px;
    text-shadow: 5px 4px 10px black;
    cursor: pointer;
`

const Project = styled.text`
    font-size: 70px;
    margin-top: 5px;
    margin-left: 100px;
    text-shadow: 5px 4px 10px black;
    cursor: pointer;
`