import styles from "../style";

const CTA = () => (
  <section
    id="cta"
    className={`flex flex-col md:flex-row my-2 md:my-16 bg-discount-gradient rounded-2xl items-center py-24 px-20 justify-between`}
    style = {{background: "linear-gradient(-168.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#11101d 91.61%)"}}
  >
    <div className="flex flex-col md:flex-row md:justify-center md:items-center justify-start items-start">
      <div className="flex flex-col">
        <h2 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[48px] text-white leading-[80px] mb-4">
          Let&#39;s try our service now!
        </h2>
        <div className={`${styles.paragraph} max-w-[480px] md:mr-36`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </div>
      </div>
      <div className="max-w-[170px] h-[64px] rounded-lg bg-blue-gradient flex items-center mt-10 cursor-pointer md:ml-52">
        <div className="px-8 py-4 font-poppins">Get Started</div>
      </div>
    </div>
  </section>
);

export default CTA;
