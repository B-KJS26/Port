import { createGlobalStyle } from "styled-components";
import Nexa from '../fonts/Nexa-Heavy.ttf';
import Nexalight from '../fonts/Nexa-ExtraLight.ttf';
import Nexablack from '../fonts/Nexa-Trial-Black.ttf';
import Nexabold from '../fonts/Nexa-Trial-Bold.ttf';
import Nexaheavy from '../fonts/Nexa-Trial-Heavy.ttf';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Nexa';
    font-style: normal;
    src: url(${Nexa}) format('truetype');
  }
  @font-face {
    font-family: 'NexaLight';
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
`
export default GlobalStyle; 