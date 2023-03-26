import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
export default function Footer() {
    return (
        <>
            <Footermains>
                <Names>KIM JUNSEO</Names>
                <Icons>
                    <MdAlternateEmail size={50}></MdAlternateEmail>
                </Icons>
                <Address>digyrh456789@gmail.com</Address>
            </Footermains>
        </>
    );
}
const Address = styled.h2`
    position: absolute;
    margin-left: 6vw;
    margin-top: 5vw;
    font-size: 32px;
    font-family: Nexa;
`
const Icons = styled.div`
    position: absolute;
    margin-left: 2.8vw;
    margin-top: 5vw;
`
const Names = styled.h1`
    position: absolute;
    color: black;
    font-family: Nexaheavy;
    margin-left: 3vw;
    margin-top: 2vw;
    font-size: 35px;
`
const Footermains = styled.div`
    width: 100%;
    height: 500px;
    background: linear-gradient(lightCyan, skyBlue, deepSkyBlue);
`