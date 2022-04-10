import styles from "../styles/Product.module.scss";

const Product = (props) => (
    <section
        className={styles.product}
        style={{ backgroundColor: `${props.color}` }}
    >
        <div className={styles.container}>
            <div>
                <div>
                    <img
                        src={`/img/${props.logo}`}
                        alt=""
                        srcSet=""
                        className={styles.logo}
                        style={{ maxWidth: `${props.sizeLogo}` }}
                    />
                    <ul>
                        {props.buttons.map((el) => (
                            <li key={el.id}>
                                <button>{el.name}</button>
                            </li>
                        ))}
                    </ul>
                    <h3 dangerouslySetInnerHTML={{ __html: props.text }} />
                </div>
            </div>
            <div>
                <img src={`/img/${props.computer}`} alt="" srcSet="" />
            </div>
        </div>
    </section>
);
export default Product;
