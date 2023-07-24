import PlanCard from "./PlanCard";
import ToggleYearly from "./ToggleYearly";
import { planData } from "../data/staticData";

const FragmentPlan = ({ isMobile, cart, setCart, eventYearHandler }) => {
  return (
    <>
      <h1 className='text-marineBlue text-2xl font-bold pb-3 md:text-4xl'>
        Select your plan
      </h1>
      <p className='pr-10 text-coolGray pb-4'>
        You have the option of monthly or yearly billing
      </p>
      <div className={isMobile ? "" : "flex justify-between"}>
        {planData.map((element, key) => {
          return (
            <PlanCard
              value={element}
              cart={cart}
              setCart={setCart}
              key={key}
              isActive={cart?.plan === element.plan ? true : false}
              isMobile={isMobile}
            />
          );
        })}
      </div>
      <ToggleYearly eventYearHandler={eventYearHandler} cart={cart} />
    </>
  );
};

export default FragmentPlan;
