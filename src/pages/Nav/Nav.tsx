import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
export default function Naving() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    }, []);
    function gomain() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function gowho() {
        window.scrollTo({ top: 930, behavior: 'smooth' });
    }
    function gowhat() {
        window.scrollTo({ top: 1860, behavior: 'smooth' });
    }
    function goproject() {
        window.scrollTo({ top: 2790, behavior: 'smooth' });
    }
    
    const MainButton = styled.button`
    background-color: ${window.scrollY < 930 ? "#FFD2FF" : "white"};
    width: 25px;
    height: 25px;
    border-radius: 50px;
    border: 0;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 2px 4px 3px black;
    transform: ${window.scrollY < 930 ? "scale(1.4)" : "scale(1)"};
    &:hover {
        transform: scale(1.5);
        transition: .6s;
    }
    `
    const WhoButton = styled.button`
    background-color: ${window.scrollY >= 930 ? (window.scrollY < 1860 ? "#FFD2FF" : "white") : "white"};
    width: 25px;
    height: 25px;
    border-radius: 50px;
    border: 0;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 2px 4px 3px black;
    transform: ${window.scrollY >= 930 ? (window.scrollY < 1860 ? "scale(1.4)" : "scale(1)") : "scale(1)"};
    &:hover {
        transform: scale(1.5);
        transition: .6s;
    }
`

    const WhatButton = styled.button`
    background-color: ${window.scrollY >= 1860 ? (window.scrollY < 2790 ? "#FFD2FF" : "white") : "white"};
    width: 25px;
    height: 25px;
    border-radius: 50px;
    border: 0;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 2px 4px 3px black;
    transform: ${window.scrollY >= 1860 ? (window.scrollY < 2790 ? "scale(1.4)" : "scale(1)") : "scale(1)"};
    &:hover {
        transform: scale(1.5);
        transition: .6s;
    }
`

    const ProjectButton = styled.button`
    background-color: ${window.scrollY >= 2790 ? "#FFD2FF": "white"};
    width: 25px;
    height: 25px;
    border-radius: 50px;
    border: 0;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 2px 4px 3px black;
    transform: ${window.scrollY >= 2790 ? "scale(1.5)": "scale(1)"};
    &:hover {
        transform: scale(1.5);
        transition: .6s;
    }
    `
    return (
        <Nav>
            <MainButton onClick={gomain} translate='yes'></MainButton>
            <WhoButton onClick={gowho}></WhoButton>
            <WhatButton onClick={gowhat}></WhatButton>
            <ProjectButton onClick={goproject}></ProjectButton>
        </Nav>
    );
}



const Nav = styled.div`
    position: fixed;
    width: 40px;
    height: 150px;
    z-index: 2;
    margin-left: 99%;
    transform: translateX(-99%);
    margin-top: 18%;
    text-align: center;
    `

