import React from 'react';
import styled from 'styled-components';
export default function Naving() {
    function gomain() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    function gowho() {
        window.scrollTo({top: 930, behavior: 'smooth'});
    }
    function gowhat() {

    }
    function goproject() {

    }
    return(
        <Nav>
            <MainButton onClick={gomain}></MainButton>
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
const MainButton = styled.button`
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    border: 0;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 2px 4px 3px gray;
`

const WhoButton = styled.button`
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    border: 0;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 2px 4px 3px gray;
`

const WhatButton = styled.button`
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    border: 0;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 2px 4px 3px gray;
`

const ProjectButton = styled.button`
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    border: 0;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 2px 4px 3px gray;
`