import { quotes } from "../assets";
import styles from "../style";

const Feedback = ({ content, name, title, img }) => (
  <div className="flex flex-col justify-evenly bg-discount-gradient transition duration-300 max-w-[370px] h-[395px] rounded-2xl px-10">
    <div className="">
      <img src={quotes} alt="quote" />
    </div>
    <div className={`${styles.paragraph} text-white`}>{content}</div>
    <div className="flex">
      <div>
        <img src={img} alt="" className="w-[48px] h-[48px] mr-4"/>
      </div>
      <div className="flex flex-col mb-4">
        <div className="text-white">{name}</div>
        <div className={`${styles.paragraph}`}>{title}</div>
      </div>
    </div>
  </div>
);

export default Feedback;
