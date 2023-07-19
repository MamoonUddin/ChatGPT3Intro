import React  from "react"
import NavBar from "./components/NavBar"
import Header from "./containers/Header"
import Brand from "./components/Brand"
import WhatGPT3 from "./containers/WhatGPT3"
import Features from "./containers/Features"
import Possibility from "./containers/Possibility"
import CallToAction from "./components/CTA"
import Blog from "./containers/Blog"
import Footer from "./containers/Footer"
import Disclaimer from "./containers/Disclaimer"


export default function App() {
  return (
    <div className="box-border p-0 m-0 scroll-smooth bg-black text-white">
      <div className="bg-gradient-to-r from-blue-950 text-sky-400  ">
        <NavBar />
        <Disclaimer />
        <Header />
      </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CallToAction />
        <Blog/>
      
      <Footer />
    </div>
  )
}

