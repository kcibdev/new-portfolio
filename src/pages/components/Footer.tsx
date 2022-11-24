import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="h-[70px] py-10 flex items-center justify-center">
      <h3 className="footer__logo mr-5">
        KCIB <span className="primary-color">.DEV</span>
      </h3>
      <div className="footer__socials"></div>
      <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
