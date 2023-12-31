import { ErrorMessage, Field } from "formik";
import { FC } from "react";
import { string } from "yup";

interface inputProps {
     name : string,
     type? : string,
     label: string,
     labelClassName? : string,  
     inputClassName? :string,
     errorClassName? :string,               
}

const Input: FC<inputProps> = ({
     name,
     label,
     type = 'string', 
     inputClassName,
     labelClassName,
     errorClassName,               
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className={`block text-sm font-medium text-gray-700 ${labelClassName ?? ''}`}
      >
        {label}
      </label>
      <div className="mt-1">
        <Field
          id={name}
          name={name}
          type={type}
          className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${inputClassName ?? ''}`}
        />
        <ErrorMessage name="{name}" className={`text-red-500 text-sm font-bold${errorClassName ?? ''}`}component="div" />
      </div>
    </>
  );
};

export default Input;
