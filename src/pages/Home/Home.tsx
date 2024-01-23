import React from "react";
import { Panel } from "../../components/Panel/Panel";
import { Button } from "../../components/Button/Button";
import "./home.css";

export const Home: React.FC = () => {
    return (
        <Panel>
            <div className='home-bg'>
                <div className='home-title-block'>
                    <div className='home-title'>DEGELAND</div>
                    <div className='home-description'>
                        Your next country. Real democracy in the web3.
                    </div>
                </div>
                <Button className='home-button'>JOIN US</Button>
            </div>
        </Panel>
    );
};
