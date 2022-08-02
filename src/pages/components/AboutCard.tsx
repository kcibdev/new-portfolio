import React from "react";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import {
  IoIosCloseCircleOutline,
  IoMdCheckmarkCircleOutline,
} from "react-icons/io";
import { IconType } from "react-icons/lib";
import { transitionStyle } from "../styles";

type Props = {
  aboutService: {
    id: number;
    title1: string;
    title2: string;
    icon: IconType;
    lists: string[];
  };
};

const AboutCard = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { aboutService: service } = props;

  return (
    <div
      className={` ${transitionStyle} services__content container-bg rounded p-4 relative text-left min-w-[200px] max-w-[250px] mt-3`}
    >
      <div>
        <service.icon className="services__icon text-3xl block mb-4" />
        <h3 className="services__title font-semibold text-xl mb-4">
          {service.title1} <br /> {service.title2}
        </h3>
      </div>
      <span
        className="services__btn primary-color cursor-pointer text-base flex items-center "
        onClick={() => setOpenModal(true)}
      >
        Learn More{" "}
        <BsArrowRightShort className="btn__icon ml-4 primary-color" />
      </span>

      <div
        className={`services__modal ${
          !openModal ? "opacity-0 invisible" : "opacity-100 visible"
        } fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 p-4 bg-rgb`}
      >
        <div className="services__modal-content container-bg rounded-lg relative p-6">
          <h4 className="services__modal-title font-semibold text-xl mb-4">
            {service.title1} <br />
            {service.title2}
          </h4>
          <IoIosCloseCircleOutline
            className="services__modal-close absolute top-4 right-4 cursor-pointer text-xl"
            onClick={() => setOpenModal(false)}
          />

          <ul className="services__modal-services grid gap-y-2">
            {service.lists.map((list, i) => (
              <li
                className="services__modal-service flex items-center text-base"
                key={i}
              >
                <IoMdCheckmarkCircleOutline className="services__modal-icon mr-3" />
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
