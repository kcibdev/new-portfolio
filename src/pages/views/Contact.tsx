import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="flex flex-col justify-center" id="contact">
      <h1 className="text-3xl font-bold mt-3 mb-1">Contact Me</h1>
      <p className="text-lg text-gray-400 mb-3">
        If you have any questions, feel free to reach out.
      </p>
      <div className="left__contact">
        <div className="contact__info">
          <BsTelephone className="contact__icon" />

          <div>
            <div className="contact__title">Call Me</div>
            <span className="contact__subtitle">234 701 650 5681</span>
          </div>
        </div>
        <div className="contact__info">
          <IoMailOutline className="contact__icon" />

          <div>
            <div className="contact__title">Email</div>
            <span className="contact__subtitle">kcib.mail@gmail.com</span>
          </div>
        </div>
        <div className="contact__info">
          <GoLocation className="contact__icon" />

          <div>
            <div className="contact__title">Location</div>
            <span className="contact__subtitle">
              Port Harcourt, Rivers State - Nigeria
            </span>
          </div>
        </div>
      </div>
      <div className="right__contact">
        <div className="contact__form">
          <form action="#">
            <div className="flex gap-3">
              <div>
                <label htmlFor="name">
                  <span className="title">Name</span>
                  <input type="text" name="name" id="name" />
                </label>
              </div>
              <div>
                <label htmlFor="email">
                  <span className="title">Email Address</span>
                  <input type="email" name="email" id="email" />
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="project">
                <span className="title">Project</span>
                <input type="text" name="project" id="project" />
              </label>
            </div>
            <div>
              <label htmlFor="message">
                <span className="title">Message</span>
                <textarea name="message" id="message"></textarea>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
