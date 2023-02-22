import React, { HTMLInputTypeAttribute } from 'react';
import './FormField.css';
interface PropsFormField {
    labelName?: string;
    type?: HTMLInputTypeAttribute;
    name?: string;
    placeholder?: string;
    value?: string;
    isSurpriseMe?: boolean;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSurpriseMe?: () => void;
}

const FormField = ({
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isSurpriseMe,
    handleSurpriseMe,
}: PropsFormField) => (
    <div>
        <div className="container">
            <label htmlFor={name} className="label_name">
                {labelName}
            </label>
            {isSurpriseMe && (
                <button
                    type="button"
                    onClick={handleSurpriseMe}
                    className="btn_submit"
                >
                    Surprise me
                </button>
            )}
        </div>
        <input
            type={type}
            id={name}
            name={name}
            className="input_form"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
        />
    </div>
);

export default FormField;
