import styled from "styled-components";
import React from 'react';
import { useState, useEffect } from 'react';
import { CgArrowDown } from 'react-icons/cg';
import BG from '../../images/Main.png';
export default function Main() {
    return (
        <Mainbackground>
        </Mainbackground>
    );
}

const Mainbackground = styled.div`
    position: absolute;
    height: 930px;
    width: 100%;
    background-size: cover;
    align-items: center;
    justify-content: center;
    &::before {
        content: "";
        background-size: cover;
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.3;
        z-index: -1;
        background-image: url(${BG});
    }
`
const Me = styled.div`
    z-index: 1;
    opacity: 100%;
`
