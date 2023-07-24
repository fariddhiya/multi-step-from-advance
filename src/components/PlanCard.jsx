import { useEffect } from "react";

const PlanCard = ({ value, isMobile, isActive, cart, setCart }) => {
  const activeStyle = () => {
    if (isActive) return "border-purplishBlue bg-purple-50";
    return "border-lightGray";
  };

  const insertCart = () => {
    setCart({
      ...cart,
      plan: value.plan,
      price: cart?.isYear ? value.yearPrice : value.monthPrice,
      addOnsArray: [],
    });
  };

  useEffect(() => {
    if (isActive) {
      setCart({
        ...cart,
        price: cart?.isYear ? value.yearPrice : value.monthPrice,
      });
    }
  }, [cart?.isYear]);

  if (isMobile) {
    return (
      <div
        onClick={insertCart}
        className={`w-full h-[5.5rem] flex items-center px-5 border-2 ${activeStyle()} rounded-md mb-4 cursor-pointer`}>
        <img src={value.icon} alt='' className='w-10 h-10' />
        <div className='pl-5'>
          <h3 className='text-marineBlue font-bold'>{value.plan}</h3>
          <p className='text-sm text-coolGray'>
            ${cart?.isYear ? value.yearPrice : value.monthPrice}/
            {value.isYear ? "yr" : "mo"}
          </p>
          {cart?.isYear ? (
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
      onClick={insertCart}
      className={`w-[31%] h-44 px-5 border-2 ${activeStyle()} flex flex-col justify-between py-4 rounded-md mb-4 cursor-pointer`}>
      <img src={value.icon} alt='' className='w-10 h-10' />
      <div className=''>
        <h3 className='text-marineBlue font-bold'>{value.plan}</h3>
        <p className='text-sm text-coolGray'>
          ${cart?.isYear ? value.yearPrice : value.monthPrice}/
          {value.isYear ? "yr" : "mo"}
        </p>
        {cart?.isYear ? (
          <p className='text-marineBlue text-sm'>2 months free</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PlanCard;
