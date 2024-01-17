import React from "react";
import "../styles/footer.css";

export const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className='path-bar wds text-18-b'>C:\PROJECTS\DEGENLAND\WEB\Ver_1.0(.exe)</div>

            <div className='footer-block wds'>
                <div className='footer-img-text-block'>
                    <div className='footer-img-block dws'>
                        <img className='footer-img' src='https://via.placeholder.com/64x64' />
                    </div>
                    <div className='footer-text-block'>
                        <div className='text-22-b '>My Heart Will Go On</div>
                        <div className='text-22-n'>Celine Dion</div>
                    </div>
                </div>

                <div>PROGRES</div>

                <div>VOLUME</div>
            </div>
        </div>
    );
};
