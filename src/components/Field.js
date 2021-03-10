import { useState } from 'react';
import { Field } from 'formik';

import {
  EyeFilled,
  EyeInvisibleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons';

const Input = ({ label, icon, error, touched, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const showError = error && touched;

  return (
    <div className='flex flex-col w-full averta text-dark '>
      {label && <label className='mb-1 font-normal text-base'>{label}</label>}
      <div
        className={`relative w-full flex items-center   ${
          showError ? 'bg-danger-light border-danger' : 'mb-2'
        }`}
      >
        {icon && icon}
        <Field
          {...rest}
          type={rest.type === 'password' && showPassword ? 'text' : rest.type}
          className={` text-dark px-3 py-2 rounded border border-gray-300 bg-transparent outline-none w-full h-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent `}
        />
        {rest.type === 'password' ? (
          <span className='absolute right-0 mr-3 h-full flex items-center '>
            {showPassword ? (
              <EyeFilled
                onClick={toggleShowPassword}
                style={{ fontSize: '120%' }}
              />
            ) : (
              <EyeInvisibleFilled
                onClick={toggleShowPassword}
                style={{ fontSize: '120%' }}
              />
            )}
          </span>
        ) : null}
      </div>
      {showError && (
        <span className='my-2 text-danger text-sm flex items-center'>
          <ExclamationCircleFilled className='mr-2' />
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
