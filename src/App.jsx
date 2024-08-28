import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import HomePage from './component/Home/Home.component'
import ShowCase from './component/showCase/ShowCase.component'
import Footer from './component/Footer/Footer.component'

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <ShowCase />
      <ShowCase />
      <Footer />
    </>
  )
}

export default App
