import styles from "../style";
import { features } from "../constants";
import Feature from "./Feature";

const Business = () => (
  <section id="features" className="flex flex-1 md:flex-row flex-col my-2 md:my-16">
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[48px] text-white leading-[80px]">
          You do the business,
          <br className="sm:block hidden" /> we&#39;ll handle the money.
        </h2>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <div className="max-w-[170px] h-[64px] rounded-lg bg-blue-gradient flex flex-1 items-center mt-10 cursor-pointer">
        <div className="px-8 py-4 font-poppins">Get Started</div>
      </div>
    </div>
    <div className={`flex-1 flex flex-col  ${styles.flexStart} md:my-0 my-10 relative`}>
        {features.map((f, i) => <Feature key = {f.id} {...f} bg = {i === 1 ? "bg-discount-gradient" : ""}/>)}
    </div>
  </section>
);
export default Business;