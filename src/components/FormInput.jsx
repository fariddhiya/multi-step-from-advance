const FormInput = ({ value, setUser, user }) => {
  const preventNumber = (e) => {
    if (!value?.label?.includes("Phone")) return;
    if (!/[A-Za-z ]/.test(e.key)) e.preventDefault();
  };
  return (
    <>
      <label htmlFor='' className='block text-marineBlue md:pb-1 md:text-lg'>
        {value.label}
      </label>
      <input
        type='text'
        placeholder={value.placeholder}
        className='border-coolGray border-[1px] p-2 md:p-3 pl-4 rounded-md mb-2 md:mb-6 placeholder:font-bold w-full'
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        onKeyDown={(e) => preventNumber(e)}
      />
    </>
  );
};

export default FormInput;
