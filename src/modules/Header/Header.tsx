import React from "react";
import { HeadBar } from "../../components/HeadBar/HeadBar";
import { Button } from "../../components/Button/Button";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import "./header.css";

export const Header: React.FC = () => {
    return (
        <>
            <HeadBar>
                <div className='head-headbar-title-block'>
                    <img className='head-headbar-icon' src='/images/favicon.ico' alt='' />
                    <div className='head-headbar-title'>DEGELAND</div>
                </div>
                <div className='head-headbar-buttons'>
                    <Button className='head-headbar-button'>_</Button>
                    <Button className='head-headbar-button'>=</Button>
                    <Button className='head-headbar-button'>+</Button>
                </div>
            </HeadBar>
            <div className='head-block'>
                <nav className='head-link-block'>
                    <ButtonLink to='/'>Main</ButtonLink>
                    <ButtonLink to='/'>Rules</ButtonLink>
                    <ButtonLink to='/'>Roadmap</ButtonLink>
                    <ButtonLink to='/'>Help</ButtonLink>
                    <ButtonLink to='/'>Links</ButtonLink>
                </nav>
                <Button className='head-button'>
                    <div className='head-button-connect'>
                        <img src='/images/key.png' alt='' />
                        Connect wallet
                    </div>
                    {/* <div className='head-button-pts'>0.143pts</div> */}
                    {/* <div className='head-button-wallet'>aX24...us22</div> */}
                </Button>
            </div>
        </>
    );
};