import styles from "../style"

const List = ({title, links}) => (
    <div className='flex flex-col md:my-0 my-6'>
        <div className='text-white text-[18px] font-medium font-poppins mb-6'>
            {title}
        </div>
        <div className="flex flex-col">
            {links.map((l,i) => {
                return (
                    <a href={l.link} key = {i} className={`${styles.paragraph} mb-2`}>{l.name}</a>
                )
            })}
        </div>
    </div>
)


export default List