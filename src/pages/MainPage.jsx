import { useState } from "react";
import FragmentInfo from "../components/FragmentInfo";
import NavMenu from "../components/NavMenu";
import MobileHeader from "../components/MobileHeader";
import useWindowDimensions from "../utils/useWindowDimensions";
import checkMobile from "../utils/checkMobile";
import DesktopNavbar from "../components/DesktopNavbar";
import FragmentPlan from "../components/FragmentPlan";
import FragmentAddOns from "../components/FragmentAddOns";
import FragmentFinish from "../components/FragmentFinish";
import { planData } from "../data/staticData";

const MainPage = () => {
  const [cart, setCart] = useState({
    plan: planData[0].plan,
    isYear: false,
    price: planData[0].monthPrice,
    addOnsArray: [],
  });

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: 0,
  });
  const [step, setStep] = useState(1);

  const width = useWindowDimensions();

  const eventNextHandler = () => {
    if (step > 3) return;
    setStep(step + 1);
  };

  const eventBackHandler = () => {
    if (step < 1) return;
    setStep(step - 1);
  };

  const eventYearHandler = () => {
    setCart({ ...cart, isYear: !cart?.isYear });
  };

  const isMobile = checkMobile(width);

  const Fragment = () => {
    if (step === 1) return <FragmentInfo setUser={setUser} user={user} />;
    if (step === 2)
      return (
        <FragmentPlan
          isMobile={isMobile}
          eventYearHandler={eventYearHandler}
          cart={cart}
          setCart={setCart}
        />
      );
    if (step === 3) return <FragmentAddOns cart={cart} setCart={setCart} />;
    if (step === 4) return <FragmentFinish cart={cart} setStep={setStep} />;
  };

  return (
    <div className='bg-lightBlue w-full h-screen md:flex md:items-center md:justify-center'>
      {isMobile ? (
        <>
          <MobileHeader setStep={setStep} step={step} />
          <div className='w-11/12 bg-white rounded-lg top-[6.5rem] right-0 left-0 mx-auto absolute p-7 '>
            {Fragment()}
          </div>
          <NavMenu
            isMobile={true}
            eventNextHandler={eventNextHandler}
            eventBackHandler={eventBackHandler}
            step={step}
          />
        </>
      ) : (
        <div className='w-4/5 h-5/6 bg-white rounded-lg flex items-center justify-between md:min-w-[50%] px-8'>
          <div className='bg-cover bg-center w-4/12 h-[95%] rounded-lg bg-sidebar-desktop pt-10 pl-5 max-w-[30rem]'>
            <DesktopNavbar setStep={setStep} step={step} />
          </div>
          <div className='md:w-8/12 lg:7/12 h-[95%] md:pl-20 lg:pl-28 pt-14 md:pr-12  flex flex-col justify-between'>
            <div>{Fragment()}</div>
            <NavMenu
              step={step}
              isMobile={false}
              eventNextHandler={eventNextHandler}
              eventBackHandler={eventBackHandler}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
