import React from "react";
import './App.css'


import { Brand, CTA, Navbar } from './components/index';

import { Blog, Header, Footer, Possibility, Features, WhatGPT } from './containers/index'

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;