import React from 'react';
import Header from './pages/Header/Header';
import styled from 'styled-components';
import Main from './pages/Main/Main';
import Naving from './pages/Nav/Nav';
import Who from './pages/Who/Who';


function App() {
  return (
    <Apps>
      <Header/>
      <Naving/>
      <Main/>
      <Who/>
    </Apps>
  );
}

const Apps = styled.div`
  width: 100%;
  height: 4000px;
`

export default App;
