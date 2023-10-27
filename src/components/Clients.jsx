import { airbnb, binance, coinbase, dropbox } from "../assets"
import styles from "../style"

const Clients = () => (
  <section id="clients" className={`flex justify-between ${styles.paddingX} flex-col md:flex-row md:my-0 my-4 items-center`}>
    <img className="w-[152px] md:my-0 my-3" src={airbnb} alt="airbnb" />
    <img className="w-[152px] md:my-0 my-3" src={binance} alt="binance" />
    <img className="w-[152px] md:my-0 my-3" src={coinbase} alt="coinbase" />
    <img className="w-[152px] md:my-0 my-3" src={dropbox} alt="dropbox" />

  </section>
)

export default Clients