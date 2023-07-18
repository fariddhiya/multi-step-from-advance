const IndexPage = ({ isActive = true, size, number, onClick }) => {
  const changeBg = (isActive) => {
    if (isActive)
      return "bg-pastelBlue bg-opa text-marineBlue border-marineBlue hover:bg-white";
    return "bg-purplishBlue text-white border-white hover:bg-white/25";
  };

  return (
    <div
      onClick={onClick}
      className={`w-10 h-10 rounded-full 
      ${changeBg(isActive)}
      m-2 flex justify-center items-center text-lg border-[1px] hover:cursor-pointer`}>
      {number}
    </div>
  );
};

export default IndexPage;
