const IndexPage = ({ isActive, number }) => {
  const changeBg = (isActive) => {
    if (isActive) return "bg-pastelBlue bg-opa text-marineBlue ";
    return "bg-purplishBlue text-white border-[1px] border-white";
  };

  return (
    <div
      className={`w-10 h-10 rounded-full 
      ${changeBg(isActive)}
      m-2 flex justify-center items-center text-lg font-medium`}>
      {number}
    </div>
  );
};

export default IndexPage;
