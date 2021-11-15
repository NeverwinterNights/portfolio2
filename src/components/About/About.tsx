import React, {useEffect, useState} from 'react';
import styles from "./About.module.scss";
import photo from "./../../img/my.jpg";
import arrow from "../../img/arrow.svg";

export const About = () => {


    const [customStyle, setCustomStyle] = useState(styles.wrapper)


    useEffect(() => {


        setTimeout(() => setCustomStyle(styles.test), 0)

        return () => {
            setCustomStyle(styles.wrapper)
        }
    }, [])


    return (
        <div className={customStyle}>
            <div className={styles.fullscreen}>
                <div className={styles.burger}><img src={arrow} alt=""/></div>
                <div className={styles.fullscreen__body}>
                    <div className={styles.content}>

                        <div className={styles.about}>
                            <h2 className={styles.title}>ABOUT ME</h2>
                            <div className={styles.subtitle}>I am a beginner developer and I like what I am doing</div>

                            <div className={styles.body}>
                                <div className={`${styles.body__item} ${styles.body__item_pic}`}>
                                    <div className={styles.body__pic}>
                                        <img src={photo} alt=""/>
                                    </div>
                                </div>
                                <div className={`${styles.body__item} ${styles.body__item_cont}`}>
                                    <div className={styles.body__item__wrapper}>
                                        <div className={styles.body__block}>
                                            <div className={styles.body__wrapper}>
                                                <div className={styles.body__info}>First Name <span>Pavel</span></div>
                                                <div className={styles.body__info}>Last Name <span>Kardash</span></div>
                                                <div className={styles.body__info}>Birthdate <span>Kardash</span></div>
                                                <div className={styles.body__info}>Nationality<span>Belarus</span>
                                                </div>
                                                <div className={styles.body__info}>Experience <span>0</span></div>
                                                <div className={styles.body__info}>Address<span>Grodno</span></div>

                                            </div>
                                        </div>
                                        <div className={styles.body__block}>
                                            <div className={styles.body__wrapper}>
                                                <div className={styles.body__info}>Freelance <span>Available</span>
                                                </div>
                                                <div className={styles.body__info}>Langages<span>English B1</span></div>
                                                <div className={styles.body__info}>Phone<span>Kardash</span></div>
                                                <div className={styles.body__info}>Email<span>Belarussian</span></div>
                                                <div className={styles.body__info}>WhatsApp <span>0</span></div>
                                                <div className={styles.body__info}>Telegram <span></span></div>
                                            </div>

                                        </div>

                                    </div>
                                    <a href="#">download CV</a>
                                </div>

                            </div>
                            <div className={styles.experience}>
                                <div className={styles.experience__body}>
                                    <div className={styles.experience__column}>
                                        <div className={styles.experience}>
                                            <div className={styles.experience__title}>EXPERIENCE</div>
                                            <div className={styles.work}>
                                                <div className={styles.date}>2006-2008</div>
                                                <span className={styles.work__company}>Insurance Company - </span>
                                                <span className={styles.work__position}>Auditor</span>
                                            </div>
                                            <div className={styles.work}>
                                                <div className={styles.date}>2008-until now</div>
                                                <span className={styles.work__company}>Frelancer  - </span>
                                                <span className={styles.work__position}>Сopywriter</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.education__column}>
                                        <div className={styles.education}>
                                            <div className={styles.education__title}>EDUCATION</div>
                                            <div className={styles.education__body}>
                                                <div className={styles.education__column}>
                                                    <div className={styles.work}>
                                                        <div className={styles.date}>2020</div>
                                                        <span className={styles.work__company}>HTML courses</span>
                                                        <span className={styles.work__position}>Auditor</span>
                                                    </div>
                                                    <div className={styles.work}>
                                                        <div className={styles.date}>2020</div>
                                                        <span className={styles.work__company}>JS courses</span>
                                                        <span className={styles.work__position}>Auditor</span>
                                                    </div>
                                                    <div className={styles.work}>
                                                        <div className={styles.date}>2021-2022</div>
                                                        <span className={styles.work__company}>React courses</span>
                                                        <span className={styles.work__position}>Auditor</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.skills}>
                                <div className={styles.skills__title}>SKILLS</div>
                                <div className={styles.skills__body}>
                                    <div className={styles.skills__item}>HTML</div>
                                    <div className={styles.skills__item}>CSS/SCSS</div>
                                    <div className={styles.skills__item}>JS</div>
                                    <div className={styles.skills__item}>REACT</div>
                                    <div className={styles.skills__item}>REDUX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



