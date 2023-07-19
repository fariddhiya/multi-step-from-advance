const BackButton = ({ isMobile, eventBackHandler }) => {
  if (isMobile) {
    return (
      <div
        className='h-10 absolute rounded-md left-6 top-5 flex items-center justify-center text-coolGray font-medium'
        onClick={eventBackHandler}>
        Go Back
      </div>
    );
  }
  return (
    <div
      className='h-full w-1/6 flex items-center text-coolGray text-lg hover:cursor-pointer'
      onClick={eventBackHandler}>
      Go Back
    </div>
  );
};

export default BackButton;
