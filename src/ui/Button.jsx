import { Link } from "react-scroll";

const Button = ({ title, url }) => {
  return (
    <Link smooth duration={500} to={url} className={` block bg-primary py-[10px]  px-4 text-white rounde rounded-md  tracking-wide  outline-none btn`}>
      {title}
    </Link>
  );
};

export default Button;
