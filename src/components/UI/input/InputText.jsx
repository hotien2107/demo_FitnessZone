const InputText = ({ placeholder, isWhite }) => {
  return (
    <input
      type='text'
      className={
        'h-14 w-full bg-transparent border-b-2 placeholder:text-2xl outline-none text-2xl ' +
        (isWhite ? 'border-white/50 placeholder:text-white/50' : 'border-gray-800/50 placeholder:text-gray-800/50')
      }
      placeholder={placeholder}
    />
  );
};

export default InputText;
