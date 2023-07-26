import BackButton from "./BackButton";
import NextButton from "./NextButton";

const NavMenu = ({ eventNextHandler, eventBackHandler, isMobile, step }) => {
  const notFirstPage = step > 1;

  if (isMobile) {
    return (
      <div className='absolute bottom-0 w-full h-[4.5rem] bg-white'>
        {notFirstPage && (
          <BackButton isMobile={isMobile} eventBackHandler={eventBackHandler} />
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
      {notFirstPage && (
        <BackButton isMobile={isMobile} eventBackHandler={eventBackHandler} />
      )}
      <NextButton isMobile={isMobile} eventNextHandler={eventNextHandler} />
    </div>
  );
};
export default NavMenu;
