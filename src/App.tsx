import React from "react";
import { Header } from "./modules/Header";
import { Footer } from "./modules/Footer";

export const App: React.FC = () => {
    return (
        <>
            <Header />

            <div className='app'>
                <div>INIT</div>
            </div>

            <Footer />
        </>
    );
};
