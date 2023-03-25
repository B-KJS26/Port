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
    background: ${window.scrollY < 930 ? "linear-gradient(#fbb3e9, #fad9d7, #bffffd)" : "white"};
    width: 1.3vw;
    height: 2.7vh;
    border-radius: 50px;
    border: 0;
    cursor: pointer;
    box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.08);
    transform: ${window.scrollY < 930 ? "scale(1.4)" : "scale(1)"};
    &:hover {
        transform: scale(1.5);
        transition: .6s;
    }
    `
    const WhoButton = styled.button`
    background: ${window.scrollY >= 930 ? (window.scrollY < 1860 ? "linear-gradient(#fbb3e9, #fad9d7, #bffffd)" : "white") : "white"};
    width: 1.3vw;
    height: 2.7vh;
    border-radius: 50px;
    border: 0;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.08);
    transform: ${window.scrollY >= 930 ? (window.scrollY < 1860 ? "scale(1.4)" : "scale(1)") : "scale(1)"};
    &:hover {
        transform: scale(1.5);
        transition: .6s;
    }
`

    const WhatButton = styled.button`
    background: ${window.scrollY >= 1860 ? (window.scrollY < 2790 ? "linear-gradient(#fbb3e9, #fad9d7, #bffffd)" : "white") : "white"};
    width: 1.3vw;
    height: 2.7vh;
    border-radius: 50px;
    border: 0;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.08);
    transform: ${window.scrollY >= 1860 ? (window.scrollY < 2790 ? "scale(1.4)" : "scale(1)") : "scale(1)"};
    &:hover {
        transform: scale(1.5);
        transition: .6s;
    }
`
    const ProjectButton = styled.button`
    background: ${window.scrollY >= 2790 ? "linear-gradient(#fbb3e9, #fad9d7, #bffffd)" : "white"};
    width: 1.3vw;
    height: 2.7vh;
    border-radius: 50px;
    border: 0;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.08);
    transform: ${window.scrollY >= 2790 ? "scale(1.5)" : "scale(1)"};
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
    width: 100%;
    height: 10%;
    z-index: 2;
    text-align: center;
    background: orange;
    `

