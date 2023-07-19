import { useState } from "react";
import FragmentInfo from "../components/FragmentInfo";
import NextButton from "../components/NextButton";
import MobileHeader from "../components/MobileHeader";
import useWindowDimensions from "../utils/useWindowDimensions";
import checkMobile from "../utils/checkMobile";
import DesktopNavbar from "../components/DestopNavbar";

const MainPage = () => {
  const [step, setStep] = useState(1);

  const width = useWindowDimensions();

  const Fragment = () => {
    if (step === 1) return <FragmentInfo />;
    if (step === 2) return <p>wakwaw</p>;
    if (step === 3) return <FragmentInfo />;
    if (step === 4) return <FragmentInfo />;
    return "";
  };

  console.log(step);

  const isMobile = checkMobile(width);

  return (
    <div className='bg-lightBlue h-screen md:flex md:items-center md:justify-center'>
      {isMobile ? (
        <>
          <MobileHeader setStep={setStep} step={step} />
          <div className='w-11/12 bg-white rounded-lg top-28 right-0 left-0 mx-auto absolute pt-5 p-7 '>
            {Fragment()}
          </div>
          <NextButton isMobile={true} />
        </>
      ) : (
        <div className='w-4/5 h-5/6 bg-white rounded-lg flex items-center justify-between md:min-w-[50%] px-8'>
          <div className='bg-cover bg-center w-4/12 h-[95%] rounded-lg bg-sidebar-desktop pt-10 pl-5 max-w-[30rem]'>
            <DesktopNavbar setStep={setStep} step={step} />
          </div>
          <div className='w-7/12 h-[95%] pl-10 pt-14 md:pr-20  flex flex-col justify-between'>
            <div>{Fragment()}</div>

            <NextButton isMobile={false} onClick={() => setStep(step + 1)} />
          </div>
          {/* <DesktopHeader />/ */}
        </div>
      )}
    </div>
  );
};

export default MainPage;
