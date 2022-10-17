import React from "react";
import './burger.scss'

export default function Burger({active, setActive, children}) {

    function close() {
        document.body.style.overflow = "auto"
        setActive(false)
    }
    
/*

    For Parent Component:


    let [active, setActive] = React.useState(false);
    
    function show() {
        document.body.style.overflow = "hidden";
        setActive(true);
    }

*/

    return (
        <div className={active === true ? 'burger active' : 'burger'} onClick={close}>
            <div className={active === true ? 'burger__content active' : 'burger__content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}