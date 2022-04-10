import styles from "../../styles/Footer.module.scss";

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.box_top}>
            <div className={styles.wrapper}>
                <div className={styles.mobile}>
                    <img src="/img/logo-nextly.svg" alt="" srcSet="" />
                </div>
                <div>
                    <span>Brazil</span>
                    <ul>
                        <li>Av. Engenheiro Luís Carlos</li>
                        <li>Berrini, 1140 – São Paulo</li>
                    </ul>
                </div>
                <div>
                    <span>United Kingdom</span>
                    <ul>
                        <li>64 The Crescent</li>
                        <li>KT33LH, New Malden</li>
                    </ul>
                </div>
                <div>
                    <span>Follow Us</span>
                    <ul className={styles.follow}>
                        <li>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/img/ic-ig.svg" alt="" srcSet="" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/img/ic-linkin.svg"
                                    alt=""
                                    srcSet=""
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <span>Contact Us</span>
                    <ul>
                        <li>
                            <a href="mailto:hi@nextly.team">hi@nextly.team</a>
                        </li>
                        <li>
                            <a href="tel:+123456789">+123 456 789</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.desktop}>
                    <img src="/img/logo-nextly.svg" alt="" srcSet="" />
                </div>
            </div>
        </div>
        <div className={styles.box_bottom}>
            <div className={styles.wrapper}>
                <span>© 2021 Nextly. All rights reserved.</span>
            </div>
        </div>
    </footer>
);

export default Footer;
