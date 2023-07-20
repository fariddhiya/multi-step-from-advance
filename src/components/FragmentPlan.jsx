import PlanCard from "./PlanCard";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import { useState } from "react";

const FragmentPlan = ({ isMobile }) => {
  const [selectedCard, setSelectedCard] = useState("Arcade");

  const planArray = [
    { icon: arcadeIcon, name: "Arcade", monthPrice: 9, yearPrice: 90 },
    { icon: advancedIcon, name: "Advanced", monthPrice: 12, yearPrice: 120 },
    { icon: proIcon, name: "Pro", monthPrice: 15, yearPrice: 150 },
  ];

  const [isYear, setIsYear] = useState(false);

  const eventYearHandler = () => {
    setIsYear(!isYear);
  };

  return (
    <>
      <h1 className='text-marineBlue text-2xl font-bold pb-3 md:text-4xl'>
        Select your plan
      </h1>
      <p className='pr-10 text-coolGray pb-4'>
        You have the option of monthly or yearly billing
      </p>
      <div className={isMobile ? "" : "flex justify-between"}>
        {planArray.map((element, key) => {
          return (
            <PlanCard
              icon={element.icon}
              name={element.name}
              monthPrice={element.monthPrice}
              isYear={isYear}
              yearPrice={element.yearPrice}
              key={key}
              eventCardHandler={setSelectedCard}
              isActive={selectedCard === element.name ? true : false}
              isMobile={isMobile}
            />
          );
        })}
      </div>
      <div className='h-14 bg-slate-400 mt-4 flex items-center justify-center bg-opacity-10'>
        <p
          className={`${
            isYear ? "text-coolGray" : "text-marineBlue"
          } font-bold pr-4`}>
          Monthly
        </p>
        <div
          className='w-12 bg-marineBlue h-7 rounded-full flex items-center pl-1'
          onClick={eventYearHandler}>
          <div
            className={`w-5 h-5 rounded-full bg-white ${
              isYear
                ? "translate-x-5 transition-transform"
                : "transition-transform"
            }`}></div>
        </div>
        <p
          className={`${
            isYear ? "text-marineBlue" : "text-coolGray"
          } font-bold pl-4`}>
          Yearly
        </p>
      </div>
    </>
  );
};

export default FragmentPlan;
