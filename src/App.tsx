
import './App.css';
import Portfolio from '@/components/Portfolio';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import { Footer } from './components/Footer';
import CreatePost from './pages/CreatePost';

function App() {
    // return (<Portfolio />
    return (
        <BrowserRouter>
            <Navbar />

            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-post" element={<CreatePost />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
