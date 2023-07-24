const AddOnsCard = ({ value, isActive, eventAddonsHandler, cart }) => {
  return (
    <div
      className={`flex justify-between items-center border-2 ${
        isActive
          ? "border-purplishBlue bg-purple-50"
          : "border-coolGray bg-white"
      }  py-3 px-4 mb-3.5 rounded-lg hover:cursor-pointer`}
      onClick={eventAddonsHandler}>
      <div className='flex justify-between items-center'>
        <input
          checked={isActive ? true : false}
          onChange={eventAddonsHandler}
          type='checkbox'
          className='accent-purplishBlue w-6 h-6 mr-3.5'
        />

        <div className='h-12 md:h-auto w-full mr-4 flex flex-col justify-center '>
          <p className='text-sm md:text-sm text-marineBlue font-bold'>
            {value.label}
          </p>
          <p className='text-xs md:text-sm text-coolGray'>{value.desc}</p>
        </div>
      </div>

      <div className='text-purplishBlue'>
        +{cart?.isYear ? value.yearPrice : value.monthPrice}/
        {cart?.isYear ? "yr" : "mo"}
      </div>
    </div>
  );
};

export default AddOnsCard;
