import { useState } from "react";
import IndexPage from "../components/IndexPage";

const MainPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div className='bg-lightBlue h-screen'>
      <div className='left-side bg-slate-900 flex justify-center pt-8 pb-20 bg-sidebar-mobile bg-cover'>
        <IndexPage number={1} onClick={() => setStep(1)} />
        <IndexPage number={2} onClick={() => setStep(2)} />
        <IndexPage number={3} onClick={() => setStep(3)} />
        <IndexPage number={4} onClick={() => setStep(4)} />
      </div>
      <div className='w-11/12 bg-white rounded-lg top-28 right-0 left-0 mx-auto absolute pt-5 p-7'>
        <h1 className='text-2xl font-bold text-marineBlue mb-2'>
          Personal info
        </h1>
        <h3 className='text-md text-coolGray mr-3 mb-4'>
          Please provide your name, email address, and phone number.
        </h3>
        <label htmlFor='' className='block text-marineBlue'>
          Name
        </label>
        <input
          type='text'
          placeholder='e.g. Stephen King'
          className='w-full border-coolGray border-[1px] p-2 pl-4 rounded-md mb-2 placeholder:font-bold'
        />
        <label htmlFor='' className='block text-marineBlue'>
          Email Address
        </label>
        <input
          type='text'
          placeholder='e.g. stephenking@lorem.com'
          className='w-full border-coolGray border-[1px] p-2 pl-4 rounded-md mb-2 placeholder:font-bold'
        />
        <label htmlFor='' className='block text-marineBlue'>
          Phone Number
        </label>
        <input
          type='text'
          placeholder='e.g. +1 234 567 890'
          className='w-full border-coolGray border-[1px] p-2 pl-4 rounded-md mb-2 placeholder:font-bold'
        />
      </div>
      <div className='absolute bottom-0 w-full h-20 bg-white'>
        <div className='w-28 h-10 absolute rounded-md right-5 top-5 flex items-center justify-center bg-marineBlue text-white font-bold'>
          Next Step
        </div>
      </div>
    </div>
  );
};

export default MainPage;

const farid = "sda sa";
