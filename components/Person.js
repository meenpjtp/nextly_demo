import styles from '../styles/Person.module.scss'

const Person = (props) => (
    <section className={styles.person}>
        <img src={`/img/${props.img}`} alt="" srcSet="" />
        <h2>{props.text}</h2>
        <span>{props.name}</span>
        <span>{props.position}</span>
        <button className={styles.button}>see in Clutch</button>
    </section>
)

export default Person;