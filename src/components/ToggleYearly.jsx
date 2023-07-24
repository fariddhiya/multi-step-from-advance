const ToggleYearly = ({ cart, eventYearHandler }) => {
  return (
    <div className='h-14 bg-slate-400 mt-4 flex items-center justify-center bg-opacity-10'>
      <p
        className={`${
          cart?.isYear ? "text-coolGray" : "text-marineBlue"
        } font-bold pr-4`}>
        Monthly
      </p>
      <div
        className='w-12 bg-marineBlue h-7 rounded-full flex items-center pl-1 hover:cursor-pointer'
        onClick={eventYearHandler}>
        <div
          className={`w-5 h-5 rounded-full bg-white ${
            cart?.isYear
              ? "translate-x-5 transition-transform"
              : "transition-transform"
          }`}></div>
      </div>
      <p
        className={`${
          cart?.isYear ? "text-marineBlue" : "text-coolGray"
        } font-bold pl-4`}>
        Yearly
      </p>
    </div>
  );
};

export default ToggleYearly;
