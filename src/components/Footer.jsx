import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";
import List from "./List";

const Footer = () => (
  <section id="footer" className="">
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="flex flex-col md:mr-48 my-4 md:my-0">
        <img src={logo} alt="logo" className="w-[200px] h-[72px]" />
        <div className={`${styles.paragraph} md:ml-6 mt-4`}>
          A new way to make the payments <br /> easy, reliable and secure.
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between flex-1">
        {footerLinks.map((f, i) => (
          <List key={i} {...f} />
        ))}
      </div>
    </div>
    <div className="flex flex-col md:flex-row md:justify-between pt-10 border-t-dimWhite border-t-[0.1px] mt-8 mb-8 items-center">
      <div className="text-dimWhite font-poppins text-[18px] md:mb-0 mb-5">
        Copyright &copy; 2023 HooBank. All Rights Reserved.
      </div>
      <div className="flex flex-row">
        {socialMedia.map((s, i) => (
          <img src = {s.icon} key={i} className="mr-6"/>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
