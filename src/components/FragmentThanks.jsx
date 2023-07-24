import thanksIcon from "../assets/images/icon-thank-you.svg";

const FragmentThanks = () => {
  return (
    <div className='h-full flex flex-col justify-center my-10 md:my-0 md:pb-40'>
      <img src={thanksIcon} className='mx-auto' alt='' />
      <h3 className='mt-8 text-marineBlue text-3xl font-bold text-center'>
        Thank you!
      </h3>
      <p className='mt-4 text-coolGray text-center'>
        Thanks for confirming subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgeming.com
      </p>
    </div>
  );
};

export default FragmentThanks;
