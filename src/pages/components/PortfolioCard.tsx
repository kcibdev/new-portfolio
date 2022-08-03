import { useState } from "react";
import { transitionStyle } from "../styles";

type Props = {
  portfolio: {
    id: number;
    img: string;
    title: string;
    desc: string;
    link: string;
    isAvailable: boolean;
  };
};

const PortfolioCard = (props: Props) => {
  const { portfolio: port } = props;
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="relative rounded-lg w-full md:max-w-[300px] min-h-[270px] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="port__image w-full h-full">
        <img
          src={port.img}
          alt={port.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={` ${transitionStyle} port__details absolute top-0 left-0 w-full h-full bg-rgba text-center p-4 z-50 flex flex-col items-center justify-center ${
          isHover ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* <h2 className="port__title text-2xl my-1 font-bold">{port.title}</h2> */}
        <p
          className="port__desc text-lg lg:text-xl my-2"
          dangerouslySetInnerHTML={{ __html: port.desc }}
        ></p>
        {port.isAvailable && (
          <a
            href={port.link}
            target="_blank"
            rel="noopener noreferrer"
            className="port__link p-3 text-base font-semibold block rounded-lg border-primary border-[0.5px] hover:bg-primary"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
