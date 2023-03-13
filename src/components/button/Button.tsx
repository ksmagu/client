import React from 'react';
import './button.scss';

interface ButtonProps {
    color?: string;
    onClick: (e: React.FormEvent) => void;
    active?: boolean;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    color,
    onClick,
    active,
    children,
}) => {
    return (
        <button
            className={`button${active ? ' active' : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
