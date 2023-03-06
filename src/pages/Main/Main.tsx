import styled from "styled-components";
import React from 'react';
import { useState, useEffect } from 'react';
import { CgArrowDown } from 'react-icons/cg';
export default function Main() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    }, []);
    
    return(
        <Mainbackground>
        </Mainbackground>
    );
}

const Mainbackground = styled.div`
    position: absolute;
    height: 930px;
    width: 100%;
    background-color: #A5D8FA;
    opacity: 90%;
    z-index:1;
`
