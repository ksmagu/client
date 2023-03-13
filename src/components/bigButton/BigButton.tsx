import React from 'react';
import './bigButton.scss';

interface ButtonProps {
    color: string;
    onClick: (e: React.FormEvent) => void;
    children?: React.ReactNode;
}

const BigButton: React.FC<ButtonProps> = ({ color, onClick, children }) => {
    return (
        <button
            className='bigButton'
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default BigButton;
