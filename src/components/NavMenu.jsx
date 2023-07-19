import BackButton from "./BackButton";
import NextButton from "./NextButton";

const NavMenu = ({ eventNextHandler, eventBackHandler, isMobile, step }) => {
  console.log(step);
  if (isMobile) {
    return (
      <div className='absolute bottom-0 w-full h-[4.5rem] bg-white'>
        {step > 1 ? (
          <BackButton isMobile={isMobile} eventBackHandler={eventBackHandler} />
        ) : (
          ""
        )}
        <NextButton isMobile={isMobile} eventNextHandler={eventNextHandler} />
      </div>
    );
  }

  return (
    <div
      className={`w-full h-12 mb-5 flex ${
        step > 1 ? "justify-between" : "justify-end"
      } items-center`}>
      {step > 1 ? (
        <BackButton isMobile={isMobile} eventBackHandler={eventBackHandler} />
      ) : (
        ""
      )}
      <NextButton isMobile={isMobile} eventNextHandler={eventNextHandler} />
    </div>
  );
};
export default NavMenu;
