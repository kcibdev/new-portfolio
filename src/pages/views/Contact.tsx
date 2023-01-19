import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { formContent, formInput, inputLabel } from "../styles";
import { PulseLoader } from "react-spinners";

type Props = {};

const Contact = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const onChangeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const SendMessage = (e: any) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.project
    ) {
      toast.error("Fill in all fields!");
      return;
    }

    setIsSendingMessage(true);
    const templateParams = {
      username: formData.name,
      email: formData.email,
      project: formData.project,
      message: formData.message,
    };

    emailjs
      .send(
        "portfolio",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_ID
      )
      .then(
        (response) => {
          setFormData({
            name: "",
            email: "",
            project: "",
            message: "",
          });
          toast.success("Message sent successfully!");
          setIsSendingMessage(false);
        },
        (err) => {
          setIsSendingMessage(false);
          console.log(err);
          toast.error("Error sending message!");
        }
      );
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
                <a href="tel:2347016505681">234 701 650 5681</a>
              </span>
            </div>
          </div>
          <div className="contact__info flex mb-5">
            <IoMailOutline className="contact__icon mr-5 text-2xl mt-3" />

            <div>
              <div className="contact__title text-lg font-bold">Email</div>
              <span className="contact__subtitle text-base ">
                <a href="mailto:kcib.mail@gmail.com">kcib.mail@gmail.com</a>
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
              <div className="flex md:gap-3 flex-col md:flex-row">
                <div className={`${formContent}`}>
                  <label htmlFor="name" className={`${inputLabel}`}>
                    <span className="title">Name</span>
                    <input
                      type="text"
                      onChange={onChangeInput}
                      value={formData.name}
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
                      onChange={onChangeInput}
                      value={formData.email}
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
                    onChange={onChangeInput}
                    value={formData.project}
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
                    onChange={onChangeInput}
                    value={formData.message}
                    cols={0}
                    rows={7}
                    placeholder="Hi, I think we need an application for our products at Company X. How soon can you hop on to discuss this?"
                    className={`${formInput}`}
                  ></textarea>
                </label>
              </div>

              {!isSendingMessage ? (
                <button
                  type="submit"
                  onClick={SendMessage}
                  className="font-semibold rounded-md primary-bg py-2 px-3 mt-3"
                  style={{
                    border: "none",
                  }}
                >
                  Send Message
                </button>
              ) : (
                <PulseLoader
                  size={15}
                  color={"#576ee0"}
                  cssOverride={{
                    color: "#576ee0",
                  }}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
