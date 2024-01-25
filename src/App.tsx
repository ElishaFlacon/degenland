import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter/AppRouter";
import { Header } from "./modules/Header/Header";
import { Footer } from "./modules/Footer/Footer";

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Suspense>
                <div className='app'>
                    <AppRouter />
                </div>
            </Suspense>
            <Footer />
        </BrowserRouter>
    );
};
