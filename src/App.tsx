import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./services/AppRouter";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
        <AppContainer>
            <AppRouter />
        </AppContainer>
    </BrowserRouter>
  );
}

export default App;

const AppContainer = styled.div`
  border: 1px dotted gray;
  margin: 25px;
`