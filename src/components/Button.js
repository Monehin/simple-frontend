const Button = ({ children, className = '', ...rest }) => {
  return (
    <button
      className={`box-border px-4 py-2 h-10 flex items-center justify-center text-sm text-white disabled:text-gray disabled:opacity-10 rounded-md font-semibold tracking-wide cursor-pointer ${
        rest.disabled ? 'bg-black cursor-not-allowed' : 'bg-blue-400'
      }  ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
