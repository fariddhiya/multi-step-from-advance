const NextButton = ({ isMobile, eventNextHandler }) => {
  if (isMobile) {
    return (
      <div
        className='w-28 h-10 absolute rounded-md right-5 top-5 flex items-center justify-center bg-marineBlue text-white font-medium'
        onClick={eventNextHandler}>
        Next Step
      </div>
    );
  }
  return (
    <div
      onClick={eventNextHandler}
      className='w-28 h-full bg-marineBlue rounded-md flex justify-center items-center text-white hover:bg-[var(--marine-blue)] hover:opacity-90 hover:cursor-pointer'>
      Next Step
    </div>
  );
};

export default NextButton;
