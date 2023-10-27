import styles from "../style";

const Feature = ({ bg, icon, title, content }) => (
  <div className={`flex flex-row flex-1 justify-center items-center ${bg} rounded-lg md:my-0 my-4 py-3`}>
    <div className="px-6">
      <img src={icon} alt="icon" />
    </div>
    <div className="flex flex-col">
      <div className="text-white font-poppins text-[18px] font-semibold leading-6">
        {title}
      </div>
      <p className={`${styles.paragraph}`}>
        {content}
      </p>
    </div>
  </div>
);

export default Feature;
