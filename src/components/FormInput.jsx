import { useState } from "react";

const FormInput = ({ value, setUser, user }) => {
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    let result = "";
    if (/Name/.test(value?.label)) {
      result = event.target.value.replace(/[^a-zA-Z] /gi, "");
      setMessage(event.target.value);
      setMessage(result);
      setUser(() => ({
        ...user,
        name: event.target.value,
      }));
    } else if (/Email/.test(value?.label)) {
      setMessage(event.target.value);
      setUser(() => ({
        ...user,
        email: event.target.value,
      }));
    } else if (/Phone/.test(value?.label)) {
      setMessage(result);
      setUser(() => ({
        ...user,
        phone: event.target.value,
      }));
    } else {
      setMessage(event.target.value);
    }
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
        onChange={handleChange}
        value={message}
        maxLength='32'
      />
    </>
  );
};

export default FormInput;
