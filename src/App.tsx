import React from 'react';
import styled from 'styled-components';
import Main from './pages/Main/Main';
import Naving from './pages/Nav/Nav';
import Who from './pages/Who/Who';
import What from './pages/What/What';
import Project from './pages/Project/Project';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <>
      <Apps>
        <Main />
        <Who />
        <What />
        <Project />
      </Apps>
      <Footer />
    </>
  );
}

const Apps = styled.div`
  width: 100%;
  height: auto;
`

export default App;
