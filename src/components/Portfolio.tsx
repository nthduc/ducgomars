import { MarsScene } from './MarsScene';
import { MarsInfo } from './MarsInfo';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <main>
                <MarsScene />
                <MarsInfo />
            </main>

            <Footer />
        </div>
    );
};

export default Portfolio;
