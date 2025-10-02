import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
// import React, { useState } from 'react';
// import {Heart, Bookmark, MessageCircle } from 'lucide-react';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CardsSection from './components/CardsSection'

function App() {


  return (
    <>
        <Header/>
        <HeroSection/>
        <CardsSection/>
    </>
  );
}

export default App
