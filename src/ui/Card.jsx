const Card = ({ img, title }) => {
  return (
    <div className=" bg-navbarClose  py-[10px] pl-[10px] pr-5  min-w-[95] md:min-w-[150px] rounded-lg">
      <img src={img} alt={title} className=" mb-3 md:w-[56px] h-[42px] md:h-[56px]" />
      <span className=" text-[14px] md:text-[18px] font-medium md:font-semibold ">{title}</span>
    </div>
  );
};

export default Card;
