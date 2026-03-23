// import { useState } from 'react';
import './InputComponent.css';
function InputComponent({ placeholder, value, onChange, icon }) {
    return (
        <div className="input-wrapper">
            {icon ? (
                <>
                    <input className="input" type="text" placeholder={placeholder} value={value} onChange={onChange} />
                    <img src={icon} alt="Лупа" className="input-icon" />
                </>
            ) : (
                <input className="input input_without_icon" type="text" placeholder={placeholder} value={value} onChange={onChange} />
            )}
        </div>
    );
}

export default InputComponent;
