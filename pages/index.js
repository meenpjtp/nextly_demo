import Head from "next/head";
import Image from "next/image";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Button from "../components/button/Button";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.scss";
import footer from "../styles/Footer.module.scss";

import { dataSpecialties } from "../data/specialties";
import Jonathan from "../components/Person";
import Anthony from "../components/Person";
import Gustavo from "../components/Person";
import Descola from "../components/Product";
import JobPixel from "../components/Product";
import Vendoo from "../components/Product";

export default function Home() {
    const vendoo = `<span>Vendoo</span> is an e-commerce platform 
    envisioned by a D.C.- based startup. 
    We’ve built a Node.js application where 
    users can cross-post their inventory onto 
    multiple marketplaces such as eBay, Etsy, 
    Poshmark, Mercari, Grailed, and Depop.`;

    const descola = `<span>Descola</span> is an online learning platform 
    based in São Paulo. The amazing 
    platform we’ve developed allows users to 
    buy and watch their as amazing 
    video-based courses and teaching 
    materials.`;

    const specialties = `Our <span>software</span> is made from relevant <span>technologies</span> in the 
    market, which guarantee the <span>quality</span> of the service`;

    const anthony = `“Strong team that's easy to work with. Doesn't just focus on 
    trying to get something out the door, but also concerns 
    themselves with the scalability of their application design.”`;

    const gustavo = `“Conversion rates improved as a result of Nextly’s work. The 
    team is organized and has strong practices for development 
    projects. Everyone is happy with the new platform.”`;

    const jobPixel = `<span>JobPixel</span>, a Bay Area-based startup, 
    came to humanize hiring. To help, we’ve 
    built a video-first platform that makes it 
    astonishingly easy for companies to hire 
    candidates with video and for candidates 
    to submit video in lieu of or in addition to 
    the traditional resumé and cover letter.`;

    const jonathan = `“Nextly has done a spectacular job on sophisticated 
    projects so far. They’ve been a great partner, and we plan to 
    expand their role going forward.”`;

    const buttons = [
        { id: 1, name: "React/Redux" },
        { id: 2, name: "Firebase" },
        { id: 3, name: "Node.js/Express" },
        { id: 4, name: "AWS" },
    ];

    const team = `<span>Nextly</span> is a team of <span>+60 developers,</span> systems architects, 
    designers, founders, and makers that have been working 
    together for over <span>10 years</span> building scalable tech solutions for 
    <span>Fortune 500s,</span> Inc 5000s, high-growth startups, and even 
    internationally renowned names such as the <span>UN</span> & the <span>IOC.</span>`;

    const team_2 = `We’re more than proud of the +70,000 hours we’ve worked to deliver succesful 
    digital products in different industries. <span>See some of it.</span>`

    return (
        <>
            <section className={styles.home}>
                <div>
                    <div>
                        <h1>{`We’re bringing 
                    software development 
                    to the next level.`}</h1>
                        <h3>Talk to our Business Specialist!</h3>
                    </div>
                    <button>Schedule a meeting</button>
                </div>
            </section>

            <section className={styles.team}>
                <div className={styles.box_top}>
                    <img src="/img/bg.svg" alt="" srcSet="" />
                    <div>
                        <h2 dangerouslySetInnerHTML={{ __html: team }}></h2>
                    </div>
                </div>
                <div className={styles.box_below}>
                    <h4 dangerouslySetInnerHTML={{ __html: team_2 }}></h4>
                </div>
            </section>

            <Vendoo
                text={vendoo}
                color="#6856C9"
                logo="logo-vendoo.svg"
                buttons={buttons}
                computer="vendoo.png"
                sizeLogo="500px"
            />
            <Jonathan
                img="jonathan.jpg"
                text={jonathan}
                name="Jonathan May"
                position="CEO at Evolution Virtual"
            />
            <JobPixel
                text={jobPixel}
                color="#3C4147"
                logo="logo_jobpixel.svg"
                buttons={buttons}
                computer="jobpixel.png"
                sizeLogo="500px"
            />
            <Anthony
                img="person_1.jpg"
                text={anthony}
                name="Anthony Duerr"
                position="CEO at JobPixel | ex director of engineering of Linkedin"
            />
            <Descola
                text={descola}
                color="#F24423"
                logo="logo-descola.svg"
                buttons={buttons}
                computer="descola.png"
                sizeLogo="120px"
            />
            <Gustavo
                img="person_2.jpg"
                text={gustavo}
                name="Gustavo Paiva"
                position="CEO at Descola"
            />

            <section className={styles.specialties}>
                <div>
                    <div className={styles.container_text}>
                        <h1>Specialties</h1>
                        <h2
                            dangerouslySetInnerHTML={{ __html: specialties }}
                        ></h2>
                    </div>

                    <div className={styles.container_icon}>
                        {dataSpecialties.map((el) => (
                            <div key={el.id}>
                                <div className={styles.wrapper_icon}>
                                    <img
                                        src={`/img/${el.img}`}
                                        alt=""
                                        srcSet=""
                                    />
                                </div>
                                <span>{el.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.contact}>
                <div className={styles.container}>
                    <div>
                        <h1>Let’s talk!</h1>
                        <h2>{`Fill out the form or send 
                        us an email, so we can 
                        see how we can help
                        you.`}</h2>

                        <h2
                            className={styles.desktop}
                        >{`You can also schedule a 
                        meeting with Fernando!`}</h2>

                        <a
                            href="mailto:hi@nextly.team"
                            className={styles.email}
                        >
                            hi@nextly.team
                        </a>

                        <div className={styles.mobile}>
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { width: "100%" },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-basic"
                                    // label="Full Name*"
                                    // variant="outlined"
                                    placeholder="Full Name*"
                                />

                                <TextField
                                    id="outlined-basic"
                                    placeholder="E-mail*"
                                />

                                <TextField
                                    id="outlined-basic"
                                    placeholder="Company*"
                                />

                                <TextField
                                    // id="outlined-multiline-static"
                                    // label="Multiline"
                                    multiline
                                    rows={4}
                                    placeholder="Tell us a bit of your idea"
                                />

                                {/* <button>Send</button> */}
                                <button className={styles.btn_gradient}>
                                    Send
                                </button>

                                {/* <Button variant="outlined">Send</Button> */}
                            </Box>

                            <h2>{`You can also schedule a 
                        meeting with Fernando!`}</h2>
                        </div>

                        <Button
                            variant="outlined"
                            sx={{
                                width: "100%",
                                color: "#fff",
                                borderRadius: "50px",
                                padding: "10px 20px",
                                background:
                                    "linear-gradient(270deg,rgba(0, 49, 102, 1) 0%,rgba(0, 122, 255, 1) 100%)",
                                border: 0,
                            }}
                        >
                            Schedule a meet
                        </Button>
                    </div>
                    <div className={styles.desktop}>
                        <Box
                            component="form"
                            sx={{
                                "& > :not(style)": { width: "100%" },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-basic"
                                // label="Full Name*"
                                // variant="outlined"
                                placeholder="Full Name*"
                            />

                            <TextField
                                id="outlined-basic"
                                placeholder="E-mail*"
                            />

                            <TextField
                                id="outlined-basic"
                                placeholder="Company*"
                            />

                            <TextField
                                // id="outlined-multiline-static"
                                // label="Multiline"
                                multiline
                                rows={4}
                                placeholder="Tell us a bit of your idea"
                            />

                            {/* <button>Send</button> */}
                            <button className={styles.btn_gradient}>
                                Send
                            </button>

                            {/* <Button variant="outlined">Send</Button> */}
                        </Box>
                    </div>
                </div>
            </section>
        </>
    );
}
