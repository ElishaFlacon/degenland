import React, { ReactNode } from "react";
import "./panel.css";

interface Props {
    children?: ReactNode;
}

export const Panel: React.FC<Props> = ({ children }) => {
    return (
        <div className='panel lgs'>
            <div className='panel-shadow wds'>
                <div className='panel-paddings'>
                    <div className='panel-border1'>
                        <div className='panel-border2'>
                            <div className='panel-content'>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
