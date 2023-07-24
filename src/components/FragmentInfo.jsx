import { infoData } from "../data/staticData";
import FormInput from "./FormInput";

const FragmentInfo = ({ setUser, user }) => {
  return (
    <>
      <h1 className='text-2xl font-bold text-marineBlue mb-2 md:text-4xl'>
        Personal info
      </h1>
      <h3 className='text-md text-coolGray mr-3 mb-4 md:mb-8 md:mr-0 md:text-lg'>
        Please provide your name, email address, and phone number.
      </h3>

      {infoData.map((e, index) => {
        return (
          <FormInput setUser={setUser} user={user} value={e} key={index} />
        );
      })}
    </>
  );
};

export default FragmentInfo;
