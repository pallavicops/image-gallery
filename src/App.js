import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
const App = () => {
  

  return (
    
    <div style={{
      height: '100vh',
      overflow: 'auto',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
    }}>
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    <Header/>
    <Body/>
   
    </div>
    
  );
};

export default App;
