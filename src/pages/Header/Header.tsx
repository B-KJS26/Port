import React from 'react';
import styled from 'styled-components';



export default function Header()  {
    return(
        <Headers>
            <Title>
                Kimjunseo's Portfolio
            </Title>
            <Info>
                Who?
            </Info>
            <Goal>
                What?
            </Goal>
        </Headers>
    );
}

const Headers = styled.div`
    position: fixed;
    background-color: gray;
    height: 80px;
    width: 100%;
    display: flex;
    font-family: 'Ascrada', sans-serif, Arial;
    color: white;
`
const Title = styled.h1`
    font-size: 50px;
    margin-top: 10px;
    margin-left: 30px
`
const Info = styled.text`
    font-size: 60px;
    margin-top: 3px;
    margin-left: 300px;
`
const Goal = styled.text`
    font-size: 60px;
    margin-top: 3px;
    margin-left: 100px;
`