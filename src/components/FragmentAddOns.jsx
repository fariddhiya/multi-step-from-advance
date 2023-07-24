import AddOnsCard from "./AddOnsCard";
import { addOnsData } from "../data/staticData";

const FragmentAddOns = ({ cart, setCart }) => {
  const eventAddonsHandler = (value) => {
    const existingAddOn = cart?.addOnsArray?.find(
      (e) => e.label === value.label
    );

    if (existingAddOn) {
      return setCart({
        ...cart,
        addOnsArray: cart.addOnsArray.filter((e) => e.label !== value.label),
      });
    }
    setCart({
      ...cart,
      addOnsArray: [
        ...cart.addOnsArray,
        {
          label: value.label,
          price: cart?.isYear ? value.yearPrice : value.monthPrice,
        },
      ],
    });
  };

  console.log(cart?.addOnsArray);

  return (
    <>
      <h1 className='text-marineBlue text-2xl font-bold pb-3 md:text-4xl'>
        Pick add-ons
      </h1>
      <p className='pr-10 text-coolGray pb-4'>
        Add-ons help enhance your gaming experience.
      </p>
      {addOnsData.map((element, index) => {
        return (
          <AddOnsCard
            key={index}
            value={element}
            eventAddonsHandler={() => eventAddonsHandler(element)}
            isActive={
              !!cart?.addOnsArray.find((e) => e.label === element.label)
                ? true
                : false
            }
            cart={cart}
          />
        );
      })}
    </>
  );
};

export default FragmentAddOns;
