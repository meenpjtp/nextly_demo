import styles from "../../styles/Navigation.module.scss";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navigation = () => {
    const menusRef = useRef(null);
    const navigationRef = useRef(null);
    const [open, setOpen] = useState(false);

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         console.log(window.scrollY)
    //         if(window.scrollY > 0) {
    //             navigationRef.current.style.background = "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(22,23,25,0.75) 30%, rgba(0,0,0,0) 100%)";
    //         } else {
    //             navigationRef.current.style.background  = "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(22,23,25,0) 30%, rgba(0,0,0,0) 100%)"
    //         }
    //     })
    // })

    useEffect(() => {
        // console.log(menusRef.current);
        if (menusRef.current) {
            // console.log(menusRef.current.querySelectorAll("a"));
            let menus = menusRef.current.querySelectorAll("a");
            menus.forEach((el) => {
                console.log(el)
                let letters = el.textContent.split("");
                el.textContent = "";
                letters.forEach((letter, i) => {
                    let span = document.createElement("span");
                    span.textContent = letter;
                    span.style.transitionDelay = `${i / 100}s`;
                    span.dataset.text = letter;
                    el.append(span);
                });
            });
        }
    });

    return (
        <nav className={styles.navigation} ref={navigationRef}>
            <img src="/img/logo-nextly.svg" alt="" srcSet="" />
            <ul ref={menusRef}>
                <li>
                    <a href="#" data-text="About">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" data-text="Work">
                        Work
                    </a>
                </li>
                <li>
                    <a href="#" data-text="Cases">
                        Cases
                    </a>
                </li>
                <li>
                    <a href="#" data-text="Contact">
                        Contact
                    </a>
                </li>
            </ul>

            {/* <input type="checkbox" name="toggle" id="toggle" /> */}
            {/* <label htmlFor="toggle" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </label> */}

            <div className={styles.menu}>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Work</a>
                    </li>
                    <li>
                        <a href="#">Cases</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
