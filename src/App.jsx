import { useState } from "react";
import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useEffect } from "react";
// import menu from './js/menu'

import Header from "./components/Header";
import Footer from "./components/Footer";

import ScrollToTop from "./utils/scrollToTop";
import Index from "./pages/Index";
import Attractions from "./pages/Attractions";
import Contacts from "./pages/contacts";
import Attraction from "./pages/Attraction";
// import Filters from "./components/Filters";

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Header />
                <main>
                    <Routes>
                        {/* <Route path="attractions/" element={<Filters />} /> */}
                        <Route path="/" element={<Index />} />
                        <Route path="attractions/" element={<Attractions />} />
                        <Route path="contacts/" element={<Contacts />} />
                        <Route
                            path="/attractions/:id"
                            element={<Attraction />}
                        />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
