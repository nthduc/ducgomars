import './App.css';
import Portfolio from '@/components/Portfolio';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import { Footer } from './components/Footer';
import CreatePost from './pages/CreatePost';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    // return (<Portfolio />
    return (
        <BrowserRouter>
            <Navbar />

            <div className="h-screen flex flex-col">
                <div className="overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create-post" element={<CreatePost />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
