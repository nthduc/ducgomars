import { MarsInfo } from '@/components/MarsInfo';
import { MarsScene } from '@/components/MarsScene';
import Showcase from '@/components/Showcase/Showcase';
import React from 'react';

const Home = () => {
    return (
        <main className="min-h-[calc(100vh - 73px)]">
            <MarsScene />
            <MarsInfo />
            
            <Showcase />
        </main>
    );
};

export default Home;
