const NextButton = ({ onClick, isMobile }) => {
  if (isMobile) {
    return (
      <div className='absolute bottom-0 w-full h-20 bg-white'>
        <div
          className='w-28 h-10 absolute rounded-md right-5 top-5 flex items-center justify-center bg-marineBlue text-white font-bold'
          onClick={onClick}>
          Next Step
        </div>
      </div>
    );
  }
  return (
    <div className='w-full h-12 mb-5 flex justify-end'>
      <div
        onClick={onClick}
        className='w-28 h-full bg-marineBlue rounded-md flex justify-center items-center text-white hover:bg-[var(--marine-blue)] hover:opacity-90 hover:cursor-pointer'>
        Next Step
      </div>
    </div>
  );
};
export default NextButton;
