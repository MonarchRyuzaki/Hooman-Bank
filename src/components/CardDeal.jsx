import { card } from "../assets";
import styles from "../style";

const CardDeal = () => (
  <section id="CardDeal" className="flex flex-1 md:flex-row flex-col my-2 md:my-16">
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[48px] text-white leading-[80px]">
          Find a better card deal
          <br className="sm:block hidden" /> in few easy steps.
        </h2>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We&#39;ve been researching and comparing credit cards for over 15 years. You
        can easily compare more than 270 Australian credit cards using our free
        tools. When you find one that suits, we&#39;ll take you securely to the
        bank&#39;s website.
      </p>
      <div className="max-w-[170px] h-[64px] rounded-lg bg-blue-gradient flex items-center mt-10 cursor-pointer">
        <div className="px-8 py-4 font-poppins">Get Started</div>
      </div>
    </div>
    <div className={`flex-1 flex flex-col  ${styles.flexStart} md:my-0 my-10 relative`}>
      <img src={card} alt="card" />
    </div>
  </section>
);

export default CardDeal;
