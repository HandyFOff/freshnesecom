import React from "react";
import './popup.scss'

export default function Popup({active, setActive, children}) {

    return (
        <div className={active ? "popup active" : "popup"} onClick={() => setActive(false)}>
            <div className={active ? "popup__content active" : "popup__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}