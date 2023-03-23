import { createGlobalStyle } from "styled-components";
import Nexa from '../fonts/Nexa-Heavy.ttf';
import Nexalight from '../fonts/Nexa-ExtraLight.ttf';
import Nexablack from '../fonts/Nexa-Trial-Black.ttf';
import Nexabold from '../fonts/Nexa-Trial-Bold.ttf';
import Nexaheavy from '../fonts/Nexa-Trial-Heavy.ttf';
import EFA from '../fonts/EFA.ttf';
import Soo from '../fonts/ImcreSoojin.ttf';
import Nanum from '../fonts/nanum.ttf';
import Fall from '../fonts/fall.ttf';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Nexa';
    font-style: normal;
    src: url(${Nexa}) format('truetype');
  }
  @font-face {
    font-family: 'Nexalight';
    font-style: normal;
    src: url(${Nexalight}) format('truetype');
  }
  @font-face {
    font-family: 'Nexablack';
    font-style: normal;
    src: url(${Nexablack}) format('truetype');
  }
  @font-face {
    font-family: 'Nexabold';
    font-style: normal;
    src: url(${Nexabold}) format('truetype');
  }
  @font-face {
    font-family: 'Nexaheavy';
    font-style: normal;
    src: url(${Nexaheavy}) format('truetype');
  }
  @font-face {
    font-family: 'Efa';
    font-style: normal;
    src: url(${EFA}) format('truetype');
  }
  @font-face {
    font-family: 'Soojin';
    font-style: normal;
    src: url(${Soo}) format('truetype');
  }
  @font-face {
    font-family: 'Nanum';
    font-style: normal;
    src: url(${Nanum}) format('truetype');
  }
  @font-face {
    font-family: 'Fall';
    font-style: normal;
    src: url(${Fall}) format('truetype');
  }
`
export default GlobalStyle; 