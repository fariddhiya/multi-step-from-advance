const PlanCard = ({
  icon,
  name,
  monthPrice,
  isYear,
  yearPrice,
  isMobile,
  isActive,
  eventCardHandler,
}) => {
  const activeStyle = () => {
    if (isActive) return "border-purplishBlue bg-purple-50";
    return "border-lightGray";
  };

  if (isMobile) {
    return (
      <div
        onClick={() => eventCardHandler(name)}
        className={`w-full h-[5.5rem] flex items-center px-5 border-2 ${activeStyle()} rounded-md mb-4 cursor-pointer`}>
        <img src={icon} alt='' className='w-10 h-10' />
        <div className='pl-5'>
          <h3 className='text-marineBlue font-bold'>{name}</h3>
          <p className='text-sm text-coolGray'>
            ${isYear ? yearPrice : monthPrice}/{isYear ? "yr" : "mo"}
          </p>
          {isYear ? (
            <p className='text-marineBlue text-sm'>2 months free</p>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
  return (
    <div
      onClick={() => eventCardHandler(name)}
      className={`w-[31%] h-44 px-5 border-2 ${activeStyle()} flex flex-col justify-between py-4 rounded-md mb-4 cursor-pointer`}>
      <img src={icon} alt='' className='w-10 h-10' />
      <div className=''>
        <h3 className='text-marineBlue font-bold'>{name}</h3>
        <p className='text-sm text-coolGray'>
          ${isYear ? yearPrice : monthPrice}/{isYear ? "yr" : "mo"}
        </p>
        {isYear ? <p className='text-marineBlue text-sm'>2 months free</p> : ""}
      </div>
    </div>
  );
};

export default PlanCard;
