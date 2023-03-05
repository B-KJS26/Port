import styled from "styled-components";
import React from 'react';
import { useState, useEffect } from 'react';
import { CgArrowDown } from 'react-icons/cg';
import './Main.scss';
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
            <div className={scrollPosition < 100 ? "wrapping" : "nowrapping"}>
                <CgArrowDown size="75" className='botarrow'/>
            </div> 
        </Mainbackground>
    );
}

const Mainbackground = styled.div`
    position: absolute;
    height: 930px;
    width: 100%;
    background-color: #D2F3F8;
    opacity: 90%;
    z-index:1;
`
