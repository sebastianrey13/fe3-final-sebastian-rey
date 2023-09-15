import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ContextProvider } from './components/utils/global.context';

function App() {

  return (
      <ContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ContextProvider>
  );
}

export default App
