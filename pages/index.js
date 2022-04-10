import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

// import AdapterDateFns from "@mui/lab/AdapterMoment";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import MobileDatePicker from "@mui/lab/MobileDatePicker";

// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
// import { MonthPicker } from "@mui/x-date-pickers/MonthPicker";
// import { YearPicker } from "@mui/x-date-pickers/YearPicker";
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import isWeekend from 'date-fns/isWeekend';

// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
// import { MonthPicker } from '@mui/x-date-pickers/MonthPicker';
// import { YearPicker } from '@mui/x-date-pickers/YearPicker';
// import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import styles from "../styles/Home.module.scss";

import { dataSpecialties } from "../data/specialties";
import Jonathan from "../components/Person";
import Anthony from "../components/Person";
import Gustavo from "../components/Person";
import Descola from "../components/Product";
import JobPixel from "../components/Product";
import Vendoo from "../components/Product";

import { motion } from "framer-motion";
import { useState } from "react";

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
    digital products in different industries. <span>See some of it.</span> <img src="/img/arrow.svg"/>`;

    const bannerText = `We’re bringing
    software development
    to the <span>next</span> level.`;

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

    const animOpacity = {
        initial: {
            opacity: 0,
            transition: { duration: 0.6, ease: easing },
        },
        animate: {
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

    // const [value, setValue] = useState<Date | null>(new Date());
    // const [value, setValue] = useState(new Date());
    // const minDate = new Date("2020-01-01T00:00:00.000");
    // const maxDate = new Date("2034-01-01T00:00:00.000");

    return (
        <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
            <section className={styles.home}>
                <div className={styles.container}>
                    <motion.div variants={stagger} className={styles.box_left}>
                        <div>
                            <motion.h1
                                variants={fadeInUp}
                                dangerouslySetInnerHTML={{ __html: bannerText }}
                                className={styles.banner_text}
                            ></motion.h1>
                            <motion.h3
                                variants={fadeInUp}
                                className={styles.desktop}
                            >
                                Talk to our Business Specialist!
                            </motion.h3>
                            <motion.h3
                                variants={fadeInUp}
                                className={styles.mobile}
                            >
                                Meet with Nexly Specialist!
                            </motion.h3>
                        </div>
                        <motion.button
                            variants={fadeInUp}
                            className={styles.desktop}
                        >
                            Schedule a meeting
                        </motion.button>
                    </motion.div>
                    <motion.div className={styles.box_right}>
                        <motion.img
                            src="/img/calendar.svg"
                            alt=""
                            srcSet=""
                            variants={fadeRight}
                        />
                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider> */}
                        {/* <LocalizationProvider
                                                dateAdapter={AdapterDateFns}
                                            >
                                                <MobileDatePicker
                                                    value={value}
                                                    // onChange={onChange}
                                                    helperText="moment"
                                                    inputFormat="D MMMM, YYYY"
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                        />
                                                    )}
                                                />
                                            </LocalizationProvider> */}
                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <CalendarPicker
                            date={value}
                            onChange={(newDate) => setDate(newDate)}
                        />
                    </LocalizationProvider> */}

                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        orientation="landscape"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}
                        {/* <LocalizationProvider>
    <Grid item xs={12} md={6}>
          <CalendarPicker date={value} onChange={(newDate) => setDate(newDate)} />
        </Grid>
        </LocalizationProvider> */}
                    </motion.div>
                </div>
            </section>

            <motion.section
                variants={stagger}
                className={styles.team}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.8 }}
            >
                <div className={styles.box_top}>
                    <motion.img
                        variants={animOpacity}
                        src="/img/bg.svg"
                        alt=""
                        srcSet=""
                    />
                    <div>
                        <motion.h2
                            variants={fadeInUp}
                            dangerouslySetInnerHTML={{ __html: team }}
                        ></motion.h2>
                    </div>
                </div>
                <div className={styles.box_below}>
                    <div className={styles.container}>
                        <motion.h4
                            variants={fadeInUp}
                            dangerouslySetInnerHTML={{ __html: team_2 }}
                        ></motion.h4>
                    </div>
                </div>
            </motion.section>

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
                <motion.div
                    variants={stagger}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <div className={styles.container_text}>
                        <motion.h1 variants={fadeInUp}>Specialties</motion.h1>
                        <motion.h2
                            variants={fadeInUp}
                            dangerouslySetInnerHTML={{ __html: specialties }}
                        ></motion.h2>
                    </div>

                    <motion.div
                        className={styles.container_icon}
                        variants={fadeInUp}
                    >
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
                    </motion.div>
                </motion.div>
            </section>

            <section className={styles.contact}>
                <div className={styles.container}>
                    <motion.div
                        variants={stagger}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <motion.h1 variants={fadeInUp}>Let’s talk!</motion.h1>
                        <motion.h2
                            variants={fadeInUp}
                        >{`Fill out the form or send 
                        us an email, so we can 
                        see how we can help
                        you.`}</motion.h2>

                        <motion.h2
                            className={styles.desktop}
                            variants={fadeInUp}
                        >{`You can also schedule a 
                        meeting with Fernando!`}</motion.h2>

                        <motion.a
                            variants={fadeInUp}
                            href="mailto:hi@nextly.team"
                            className={styles.email}
                        >
                            hi@nextly.team
                        </motion.a>

                        <motion.div
                            className={styles.mobile}
                            variants={fadeInUp}
                        >
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
                        </motion.div>

                        <motion.div variants={fadeInUp}>
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
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.8 }}
                        className={styles.desktop}
                    >
                        <motion.div variants={fadeRight}>
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
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}
