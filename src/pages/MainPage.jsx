import { useState } from "react";
import FragmentInfo from "../components/FragmentInfo";
import NavMenu from "../components/NavMenu";
import MobileHeader from "../components/MobileHeader";
import useWindowDimensions from "../utils/useWindowDimensions";
import checkMobile from "../utils/checkMobile";
import DesktopNavbar from "../components/DesktopNavbar";
import FragmentPlan from "../components/FragmentPlan";

const MainPage = () => {
  const [step, setStep] = useState(1);

  const width = useWindowDimensions();

  const Fragment = () => {
    if (step === 1) return <FragmentInfo />;
    if (step === 2) return <FragmentPlan />;
    if (step === 3) return <FragmentInfo />;
    if (step === 4) return <FragmentInfo />;
    return "";
  };

  const eventNextHandler = () => {
    if (step === 4) return "";
    setStep(step + 1);
  };

  const eventBackHandler = () => {
    if (step === 0) return "";
    setStep(step - 1);
  };

  console.log(step);

  const isMobile = checkMobile(width);

  return (
    <div className='bg-lightBlue h-screen md:flex md:items-center md:justify-center'>
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
          <div className='w-7/12 h-[95%] pl-10 pt-14 md:pr-20  flex flex-col justify-between'>
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
