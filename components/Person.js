import styles from "../styles/Person.module.scss";
import { motion } from "framer-motion";

const Person = (props) => {
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
    return (
        <motion.section
            className={styles.person}
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.img
                variants={fadeInUp}
                src={`/img/${props.img}`}
                alt=""
                srcSet=""
            />
            <motion.h2 variants={fadeInUp}>{props.text}</motion.h2>
            <motion.span variants={fadeInUp}>{props.name}</motion.span>
            <motion.span variants={fadeInUp}>{props.position}</motion.span>
            <motion.button variants={fadeInUp} className={styles.button}>
                see in Clutch
            </motion.button>
        </motion.section>
    );
};
export default Person;
