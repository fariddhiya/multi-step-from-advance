import IndexPage from "./IndexPage";

const DesktopNavbar = ({ setStep, step }) => {
  return (
    <>
      <div className='flex items-center pb-3'>
        <IndexPage number={1} isActive={step === 1 ? true : false} />
        <div className='flex flex-col justify-center pl-2.5'>
          <p className='text-lightGray text-sm '>STEP 1</p>
          <h3 className='text-white font-bold text-md tracking-wider'>
            YOUR INFO
          </h3>
        </div>
      </div>
      <div className='flex items-center pb-3'>
        <IndexPage number={2} isActive={step === 2 ? true : false} />
        <div className='flex flex-col justify-center pl-2.5'>
          <p className='text-lightGray text-sm '>STEP 2</p>
          <h3 className='text-white font-bold text-md tracking-wider'>
            SELECT PLAN
          </h3>
        </div>
      </div>
      <div className='flex items-center pb-3'>
        <IndexPage number={3} isActive={step === 3 ? true : false} />
        <div className='flex flex-col justify-center pl-2.5'>
          <p className='text-lightGray text-sm '>STEP 3</p>
          <h3 className='text-white font-bold text-md tracking-wider'>
            ADD-ONS
          </h3>
        </div>
      </div>
      <div className='flex items-center pb-3'>
        <IndexPage number={4} isActive={step === 4 ? true : false} />
        <div className='flex flex-col justify-center pl-2.5'>
          <p className='text-lightGray text-sm '>STEP 4</p>
          <h3 className='text-white font-bold text-md tracking-wider'>
            SUMMARY
          </h3>
        </div>
      </div>
    </>
  );
};

export default DesktopNavbar;
