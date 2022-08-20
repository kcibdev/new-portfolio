import { MouseEvent } from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { formContent, formInput, inputLabel } from "../styles";

type Props = {};

const Contact = (props: Props) => {
  const sendMessage = (e: MouseEvent) => {
    e.preventDefault();
    console.log("send message");
  };

  return (
    <div className="flex flex-col justify-center items-center p-4" id="contact">
      <h1 className="text-3xl font-bold mt-3 mb-1">Contact Me</h1>
      <p className="text-base text-gray-400 mb-5">
        If you have any questions, feel free to reach out.
      </p>
      <div className="flex flex-col ml:flex-row items-center ml:items-start justify-center md:gap-16 mt-5 mb-5">
        <div className="left__contact flex flex-col my-5">
          <div className="contact__info flex mb-5">
            <BsTelephone className="contact__icon mr-5 text-2xl mt-3" />

            <div>
              <div className="contact__title text-lg font-bold">Call Me</div>
              <span className="contact__subtitle text-base ">
                234 701 650 5681
              </span>
            </div>
          </div>
          <div className="contact__info flex mb-5">
            <IoMailOutline className="contact__icon mr-5 text-2xl mt-3" />

            <div>
              <div className="contact__title text-lg font-bold">Email</div>
              <span className="contact__subtitle text-base ">
                kcib.mail@gmail.com
              </span>
            </div>
          </div>
          <div className="contact__info flex mb-5">
            <GoLocation className="contact__icon mr-5 text-2xl mt-3" />

            <div>
              <div className="contact__title text-lg font-bold">Location</div>
              <span className="contact__subtitle text-base ">
                Port Harcourt, Rivers State - Nigeria
              </span>
            </div>
          </div>
        </div>
        <div className="right__contact">
          <div className="contact__form">
            <form action="#">
              <div className="flex gap-3 flex-col md:flex-row">
                <div className={`${formContent}`}>
                  <label htmlFor="name" className={`${inputLabel}`}>
                    <span className="title">Name</span>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your full name"
                      className={`${formInput}`}
                    />
                  </label>
                </div>
                <div className={`${formContent}`}>
                  <label htmlFor="email" className={`${inputLabel}`}>
                    <span className="title">Email Address</span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      className={`${formInput}`}
                    />
                  </label>
                </div>
              </div>
              <div className={`${formContent}`}>
                <label htmlFor="project" className={`${inputLabel}`}>
                  <span className="title text-base cursor-text">Project</span>
                  <input
                    type="text"
                    name="project"
                    id="project"
                    placeholder="What project do you want to work on?"
                    className={`${formInput}`}
                  />
                </label>
              </div>
              <div className={`${formContent}`}>
                <label htmlFor="message" className={`${inputLabel}`}>
                  <span className="title">Message</span>
                  <textarea
                    name="message"
                    id="message"
                    cols={0}
                    rows={7}
                    placeholder="Hi, I think we need an application for our products at Company X. How soon can you hop on to discuss this?"
                    className={`${formInput}`}
                  ></textarea>
                </label>
              </div>
              <button
                type="submit"
                onClick={sendMessage}
                className="font-semibold rounded-md primary-bg py-2 px-3 mt-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
