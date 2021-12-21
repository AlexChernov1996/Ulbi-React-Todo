import React from 'react';
import cl from './modalWindow.module.css'
const ModalWindow = ({children,visible,setVisible}) => {
    const rootClasses =[cl.ModalWindow]
    if (visible){
        rootClasses.push(cl.ModalWindowActive)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            <div className={cl.ModalWindowContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;
