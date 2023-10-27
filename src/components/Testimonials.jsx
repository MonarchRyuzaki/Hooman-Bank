import { feedback } from "../constants";
import styles from "../style";
import Feedback from "./Feedback";

const Testimonials = () => (
  <section id="testimonials" className="flex flex-col my-2 md:my-16">
    <div className="flex flex-col md:flex-row justify-center items-center mb-20">
      <h2 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[48px] text-white leading-[80px]">
        What people are
        <br className="sm:block hidden" /> saying about us
      </h2>
      <div className={`${styles.paragraph} max-w-[480px] md:mr-36`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </div>
    </div>
    <div className="flex justify-between items-center">
      {feedback.map((f) => (
        <Feedback key = {f.id} {...f}/>
      ))}
    </div>
  </section>
);

export default Testimonials;
