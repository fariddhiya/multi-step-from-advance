import IndexPage from "./IndexPage";

const MobileHeader = ({ setStep, step }) => {
  return (
    <div className='bg-slate-900 flex justify-center pt-8 pb-20 bg-sidebar-mobile bg-cover'>
      <IndexPage isActive={step === 1 ? true : false} number={1} />
      <IndexPage isActive={step === 2 ? true : false} number={2} />
      <IndexPage isActive={step === 3 ? true : false} number={3} />
      <IndexPage isActive={step === 4 ? true : false} number={4} />
    </div>
  );
};

export default MobileHeader;
