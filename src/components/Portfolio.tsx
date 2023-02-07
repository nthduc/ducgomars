import { MarsScene } from './MarsScene';
import { MarsInfo } from './MarsInfo';
import Navbar from './Navbar/Navbar';

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <div>
                <MarsScene />
                <MarsInfo />
            </div>
        </div>
    );
};

export default Portfolio;
