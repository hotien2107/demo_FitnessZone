const InputText = ({ placeholder }) => {
  return (
    <input
      type='text'
      className='h-14 w-full bg-transparent border-b-2 border-white/50 placeholder:text-white/50 placeholder:text-3xl outline-none'
      placeholder={placeholder}
    />
  );
};

export default InputText;
