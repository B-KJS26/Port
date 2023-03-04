import React from 'react';
import Header from './pages/Header/Header';
import styled from 'styled-components';
import Main from './pages/Main/Main';
import Naving from './pages/Nav/Nav';
function App() {
  return (
    <Apps>
      <Header/>
      <Naving/>
      <Main/>
    </Apps>
  );
}

const Apps = styled.div`
  width: 100%;
  height: 2000px;
`

export default App;
