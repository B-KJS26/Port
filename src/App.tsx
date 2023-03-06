import React from 'react';
import styled from 'styled-components';
import Main from './pages/Main/Main';
import Naving from './pages/Nav/Nav';
import Who from './pages/Who/Who';
import What from './pages/What/What';
import Project from './pages/Project/Project';


function App() {
  return (
    <Apps>
      <Naving/>
      <Main/> 
      <Who/>
      <What/>
      <Project/>
    </Apps>
  );
}

const Apps = styled.div`
  width: 100%;
  height: 3720px;
`

export default App;
