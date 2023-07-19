import arcade from "../assets/images/icon-arcade.svg";

const PlanCard = ({
  icon,
  name,
  monthPrice,
  isYear,
  yearPrice,
  isMobile = true,
}) => {
  if (isMobile) {
    return (
      <div className='w-auto h-[5.5rem] flex items-center px-5 border-2 border-lightGray rounded-md mb-4'>
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
  return 0;
};

export default PlanCard;
