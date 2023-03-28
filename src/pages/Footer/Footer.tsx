import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import Github from '../../images/github.png';
import Velog from '../../images/velog.jpg';
import Notions from '../../images/notion.png';
export default function Footer() {
    function git() {
        window.location.href = "https://github.com/B-KJS26";
    }
    function vel() {
        window.location.href = "https://velog.io/@digyrh456789";
    }
    function not() {
        window.location.href = "https://www.notion.so/70843f63a76440f9b6338b3cf92b1351";
    }
    return (
        <>
            <Footermains>
                <Names>KIM JUNSEO</Names>
                <Icons>
                    <MdAlternateEmail className="iconsi"></MdAlternateEmail>
                </Icons>
                <Address>digyrh456789@gmail.com</Address>
                <Blogs>
                    <Imageone onClick={git}></Imageone><Text>Github</Text>
                    <Imagetwo onClick={vel}></Imagetwo><Text>Velog</Text>
                    <Imagethree onClick={not}></Imagethree><Text>Notion</Text>
                </Blogs>
                <Notice> 이 포트폴리오 사이트는 앞으로 계속 업데이트 될 예정입니다.</Notice>
            </Footermains>
        </>
    );
}
const Notice = styled.h1`
    position: absolute;
    font-family: Efa;
    margin-left: 3vw;
    font-size: 2.5vw;
    margin-top: 24vw;
`
const Text = styled.span`
    font-family: Nexa;
    font-size: 2.5vw;
    margin-left: 1vw;
`
const Imagethree = styled.img.attrs({
    src: `${Notions}`
})`
    width: 5vw;
    height: 5vw;
    margin-left: 2vw;
    border-radius: 5vw;
    cursor: pointer;
`;
const Imagetwo = styled.img.attrs({
    src: `${Velog}`
})`
    width: 5vw;
    height: 5vw;
    margin-left: 2vw;
    border-radius: 5vw;
    cursor: pointer;
`;
const Imageone = styled.img.attrs({
    src: `${Github}`
})`
    width: 5vw;
    height: 5vw;
    margin-left: 3vw;
    border-radius: 5vw;
    cursor: pointer;
`;
const Blogs = styled.div`
    position: absolute;
    width: 100%;
    height: 10vw;
    margin-top: 13vw;
`
const Address = styled.h2`
    position: absolute;
    margin-left: 6.5vw;
    margin-top: 7.8vw;
    font-size: 2vw;
    font-family: Nexa;
`
const Icons = styled.div`
    position: absolute;
    margin-left: 2.8vw;
    margin-top: 8vw;
    width: 3vw;
    height: 5.5vh;
    .iconsi {
        width: 3vw;
        height: 5.5vh;
    }
`
const Names = styled.h1`
    position: absolute;
    color: black;
    font-family: Nexaheavy;
    margin-left: 3vw;
    margin-top: 2vw;
    font-size: 3.5vw;
`
const Footermains = styled.div`
    width: 100%;
    height: 70vh;
    background: linear-gradient(lightCyan, skyBlue, deepSkyBlue);
`