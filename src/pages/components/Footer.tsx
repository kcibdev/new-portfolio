import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <h3 className="footer__logo">
        KCIB <span>.DEV</span>
      </h3>
      <div className="footer__socials"></div>
      <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
