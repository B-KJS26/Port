import { createGlobalStyle } from "styled-components";
import Ascrada from '../fonts/Ascrada.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'Ascrada';
        src: local('GmarketSansTTFBold'), local('GmarketSansTTFBold');
        font-style: normal;
        src: url(${Ascrada}) format('truetype');
  }
`
export default GlobalStyle;