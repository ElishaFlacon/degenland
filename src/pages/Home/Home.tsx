import React from "react";
import { Panel } from "../../components/Panel/Panel";
import { ButtonBlue } from "../../components/ButtonBlue/ButtonBlue";
import "./home.css";

export const Home: React.FC = () => {
    return (
        <Panel>
            <div className='home-bg'>
                <div className='home-content'>
                    <div className='home-title-block'>
                        <div className='home-title'>DEGENLAND</div>
                        <div className='home-description'>
                            Your next country. Real democracy in the web3.
                        </div>
                    </div>
                    <ButtonBlue className='home-button'>
                        <img src='/images/internet_connection.png' alt='' />
                        JOIN US
                    </ButtonBlue>
                </div>
            </div>
        </Panel>
    );
};
