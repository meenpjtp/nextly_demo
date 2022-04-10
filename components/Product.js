import styles from "../styles/Product.module.scss";
import { motion } from "framer-motion";

const Product = (props) => {
    let easing = [0.6, -0.05, 0.01, 0.99];

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const fadeInUp = {
        initial: {
            y: 60,
            opacity: 0,
            transition: { duration: 0.6, ease: easing },
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easing,
            },
        },
    };

    const fadeRight = {
        initial: {
            x: 60,
            opacity: 0,
            transition: { duration: 0.6, ease: easing },
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easing,
            },
        },
    };
    return (
        <motion.section
            className={styles.product}
            style={{ backgroundColor: `${props.color}` }}
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className={styles.container}>
                <div>
                    <div>
                        <motion.img
                            src={`/img/${props.logo}`}
                            alt=""
                            srcSet=""
                            className={styles.logo}
                            style={{ maxWidth: `${props.sizeLogo}` }}
                            variants={fadeInUp}
                        />
                        <motion.ul variants={fadeInUp}>
                            {props.buttons.map((el) => (
                                <li key={el.id}>
                                    <button>{el.name}</button>
                                </li>
                            ))}
                        </motion.ul>
                        <motion.h3 variants={fadeInUp} dangerouslySetInnerHTML={{ __html: props.text }} />
                    </div>
                </div>
                <div>
                    <motion.img
                        variants={fadeRight}
                        src={`/img/${props.computer}`}
                        alt=""
                        srcSet=""
                    />
                </div>
            </div>
        </motion.section>
    );
};
export default Product;
