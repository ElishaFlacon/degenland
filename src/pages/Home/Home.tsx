import React from "react";
import { Panel } from "../../components/Panel/Panel";
import { ButtonBlue } from "../../components/ButtonBlue/ButtonBlue";
import { TextGreen } from "../../components/TextGreen/TextGreen";
import "./home.css";

export const Home: React.FC = () => {
    return (
        <Panel className='big-panel'>
            <div className='home-bg'>
                <div className='home-content'>
                    <div className='home-title-block'>
                        <div className='home-title'>DEGENLAND</div>
                        <TextGreen>Your next country. Real democracy in the web3.</TextGreen>
                    </div>
                    <ButtonBlue className='home-button'>
                        <img
                            className='home-button-icon'
                            src='/images/internet_connection.png'
                            alt=''
                        />
                        JOIN US
                    </ButtonBlue>
                </div>
            </div>
        </Panel>
    );
};
