import {useEffect, useState} from 'react';
import { AppProvider } from './context/MainContext';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './styles/main.scss';
import { NavBar } from './components/NavBar/NavBar';
import { Container } from './components/Container/Container';
import {Dashboard} from './pages/Dashboard'
import {EnterpriseAnalysis} from './pages/EnterpriseAnalysis'

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <NavBar/>
        <Container>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/enterpriseAnalysis' element={<EnterpriseAnalysis/>}/>
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
