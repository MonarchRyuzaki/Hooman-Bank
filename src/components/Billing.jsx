import { apple, bill, google } from "../assets";
import styles from "../style";

const Billing = () => (
  <section id="billing" className="flex flex-1 md:flex-row flex-col mb-20">
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0`}>
      <img src={bill} alt="bill" />
    </div>
    <div className={`flex-1 flex flex-col ${styles.flexStart} md:my-0 my-10`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[48px] text-white leading-[80px]">
          Easily control your
          <br className="sm:block hidden" /> billing & invoicing.
        </h2>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex items-center mt-10">
        <img className=" cursor-pointer mr-6" src={apple} alt="apple" />
        <img className=" cursor-pointer" src={google} alt="google" />
      </div>
    </div>
  </section>
);

export default Billing;
