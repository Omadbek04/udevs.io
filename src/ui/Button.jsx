const Button = ({ title, url }) => {
  return (
    <a href={url} className={` block bg-primary py-[10px]  px-4 text-white rounde rounded-md  tracking-wide  outline-none btn`}>
      {title}
    </a>
  );
};

export default Button;