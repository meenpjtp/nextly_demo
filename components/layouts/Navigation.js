import styles from '../../styles/Navigation.module.scss'

const Navigation = () => (
    <nav className={styles.navigation}>
        <img src="/img/logo-nextly.svg" alt="" srcSet="" />
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Cases</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        <label htmlFor="">
            <span></span><span></span><span></span>
        </label>

        <div className={styles.menu}>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Cases</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
)

export default Navigation