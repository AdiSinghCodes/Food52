import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Start from './Components/Start';
import Home from './Components/Home';
import RecipePage from './Components/Recipe';
import Footer from './Components/Footer'; // Corrected import path

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen"> {/* Added flex container */}
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/start" element={<Start />} />
                        <Route path="/recipes" element={<RecipePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;