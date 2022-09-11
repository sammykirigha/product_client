
import React from "react";
import { InputFieldsProps } from "./Interfaces";

const InputField: React.FC<InputFieldsProps> = ({ label, type, name, placeholder, left, value, onChange }) => {

    return (
        <div className=" mt-5 flex items-center  flex-row gap-x-4">
            <label
                className="text-lg  font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor={name}
            >
                {label}
            </label>
            <div className={`relative flex-1 !ml-${left}`}>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
					name={name}
					placeholder={placeholder}
                    className=" w-[300px] h-[40px] rounded-md  placeholder:italic outline outline-gray-200 placeholder:text-slate-300 placeholder:pl-1 focus:border-blue-500 focus:ring-blue-500 "
                />
                
            </div>
        </div>
    );
};

export default InputField;
