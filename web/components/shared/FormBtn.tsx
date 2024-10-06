import { FC, ReactNode } from 'react';

interface FormBtnProps {
    label: string;               
    onClick?: () => void;
    type?: 'button';
    className?: string;
    disabled?: boolean;        
}

const FormBtn: FC<FormBtnProps> = ({ label, onClick, type = 'button', className = '', disabled = false}) => {
    return (
        <button
            disabled={disabled}
            type={type}
            onClick={onClick}
            className={`inline-block border-4 border-white rounded-full px-6 py-3 font-Coiny-Regular text-lg text-white text-center transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {label}
        </button>
    );
};

export default FormBtn;
