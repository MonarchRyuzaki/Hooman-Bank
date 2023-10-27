import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <section id = "stats" className={`flex flex-row justify-between flex-1 flex-wrap mb-20 md:mb-32`}>
      {stats.map((s) => {
        return (
          <div key = {s.id} className={`${styles.paragraph} flex items-center text md:mb-0 xs:mb-16 leading-[26px]`}>
            <span className="text-white font-semibold mr-4 font-poppins text-[40px]">{s.value}</span> {" "}
            <span className="text-gradient font-poppins text-[20px] uppercase">{s.title}</span>
          </div>
        )
      })}
  </section>
)

export default Stats