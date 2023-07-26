import { useEffect, useState } from "react";

const FragmentFinish = ({ cart, setStep }) => {
  const [total, setTotal] = useState(cart?.price);

  const totalAddsOns = () => {
    let priceAddsOns = cart?.addOnsArray?.map(({ price }) => price);
    return priceAddsOns.reduce((a, b) => Number(a) + Number(b));
  };

  useEffect(() => {
    if (cart?.addOnsArray?.length > 0) {
      let totalAdds = totalAddsOns(cart);
      return setTotal(totalAdds + cart?.price);
    }
    setTotal(cart?.price);
  }, [total]);

  return (
    <>
      <h1 className='text-2xl font-bold text-marineBlue mb-2 md:text-4xl'>
        Finishing up
      </h1>
      <h3 className='text-md text-coolGray mr-3 mb-4 md:mb-8 md:mr-0 md:text-lg'>
        Double-check everything looks OK before confirming.
      </h3>
      <div className='w-full bg-purple-50 p-4 md:p-5 rounded-md'>
        <div className='w-full flex justify-between'>
          <div>
            <p className='text-marineBlue font-semibold'>
              {cart?.plan} ({cart?.isYear ? "Yearly" : "Monthly"})
            </p>
            <p
              className='text-coolGray underline mb-3 hover:cursor-pointer'
              onClick={() => setStep(2)}>
              Change
            </p>
          </div>

          <h3 className='text-lg text-marineBlue font-bold text-md'>{`$${
            cart?.price
          }/${cart?.isYear ? "yr" : "mo"}`}</h3>
        </div>

        <hr className='bg-coolGray' />

        {cart?.addOnsArray?.map((e, index) => {
          return (
            <div className='w-full flex justify-between my-4' key={index}>
              <p className='text-coolGray text-sm'>{e?.label}</p>
              <p className='text-marineBlue'>
                {`+$${e?.price}/${cart?.isYear ? "yr" : "mo"}`}
              </p>
            </div>
          );
        })}
      </div>

      <div className='w-full pt-4 px-4 md:px-5 flex justify-between md:pt-8'>
        <p className='text-coolGray text-md'>
          Total (per {cart?.isYear ? "year" : "month"})
        </p>
        <p className='text-purplishBlue font-bold text-md'>{`+${total}/ ${
          cart?.isYear ? "yr" : "mo"
        }`}</p>
      </div>
    </>
  );
};

export default FragmentFinish;
