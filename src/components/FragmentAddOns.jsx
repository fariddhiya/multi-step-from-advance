import { useState } from "react";
import AddOnsCard from "./AddOnsCard";

const FragmentAddOns = ({ isYear, isMobile }) => {
  const AddOnsArray = [
    {
      name: "Online service",
      desc: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      name: "Larger storage",
      desc: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      name: "Customizable profile",
      desc: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  const [valueActive, setValueActive] = useState([]);

  const eventAddonsHandler = (value) => {
    if (!valueActive.includes(value))
      return setValueActive([...valueActive, value]);
    setValueActive(valueActive.filter((element) => element !== value));
  };

  return (
    <>
      <h1 className='text-marineBlue text-2xl font-bold pb-3 md:text-4xl'>
        Pick add-ons
      </h1>
      <p className='pr-10 text-coolGray pb-4'>
        Add-ons help enhance your gaming experience.
      </p>
      {AddOnsArray.map((element, index) => {
        return (
          <AddOnsCard
            key={index}
            name={element.name}
            desc={element.desc}
            monthlyPrice={element.monthlyPrice}
            yearlyPrice={element.yearlyPrice}
            eventAddonsHandler={() => eventAddonsHandler(element.name)}
            isActive={valueActive.includes(element.name) ? true : false}
            isYear={isYear}
          />
        );
      })}
    </>
  );
};

export default FragmentAddOns;
