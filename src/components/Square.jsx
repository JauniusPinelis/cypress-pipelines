import React from 'react';
import './Square.css';

const Square = ({ value, onClick }) => {
    return (
        // <button className="square" onClick={onClick}>
        <button className="square" onClick={() => { }}>
            {value}
        </button>
    );
};

export default Square;
