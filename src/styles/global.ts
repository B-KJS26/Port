import { createGlobalStyle } from "styled-components";
import Nexa from '../fonts/Nexa-Heavy.ttf';
import Nexalight from '../fonts/Nexa-ExtraLight.ttf';
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
`
export default GlobalStyle; 