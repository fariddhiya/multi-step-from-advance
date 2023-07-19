const FragmentInfo = () => {
  return (
    <>
      <h1 className='text-2xl font-bold text-marineBlue mb-2 md:text-4xl'>
        Personal info
      </h1>
      <h3 className='text-md text-coolGray mr-3 mb-4 md:mb-8 md:mr-0 md:text-lg'>
        Please provide your name, email address, and phone number.
      </h3>
      <label htmlFor='' className='block text-marineBlue md:pb-1 md:text-lg'>
        Name
      </label>
      <input
        type='text'
        placeholder='e.g. Stephen King'
        className='border-coolGray border-[1px] p-2 md:p-3 pl-4 rounded-md mb-2 md:mb-6 placeholder:font-bold w-full'
      />
      <label htmlFor='' className='block text-marineBlue md:pb-1 md:text-lg'>
        Email Address
      </label>
      <input
        type='text'
        placeholder='e.g. stephenking@lorem.com'
        className='border-coolGray border-[1px] p-2 md:p-3 pl-4 rounded-md mb-2 md:mb-6 placeholder:font-bold w-full'
      />
      <label htmlFor='' className='block text-marineBlue md:text-lg'>
        Phone Number
      </label>
      <input
        type='text'
        placeholder='e.g. +1 234 567 890'
        className='border-coolGray border-[1px] p-2 md:p-3 pl-4 rounded-md mb-2 md:mb-6 placeholder:font-bold mr-10 w-full'
      />
    </>
  );
};

export default FragmentInfo;
