import React, {useEffect, useState} from 'react';
import styles from "./Portfolio.module.scss";
import {NavLink} from "react-router-dom";
import arrow from "../../img/arrow.svg";
import photo1 from "./../../img/portfolio/nor.png";
import photo2 from "./../../img/portfolio/2.jpg";
import photo3 from "./../../img/portfolio/3.jpg";



export const Portfolio = () => {

    const [customStyle, setCustomStyle] = useState(styles.wrapper)


    useEffect(() => {


        const id=setTimeout(() => setCustomStyle(styles.test), 0)

        return () => {
            setCustomStyle(styles.wrapper)
            clearTimeout(id)
        }
    }, [])


    return (
        <div className={customStyle}>

            <div className={styles.fullscreen}>
                <NavLink  to="/header" className={styles.burger}><img src={arrow} alt=""/></NavLink>

                <div className={styles.fullscreen__body}>
                    <div className={styles.content}>
                        <div className={styles.content__title}>MY <span>PORTFOLIO</span></div>
                        <div className={styles.content__subtitle}>A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO
                            SEE
                            MORE? EMAIL ME.
                        </div>
                        <div className={styles.portfolio__body}>
                            <div className={styles.portfolio__row}>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src={photo1} alt=""/></div>
                                        <div className={styles.portfolio__title}>Title</div>
                                        <div className={styles.portfolio__footer}>
                                            <a target={"_blank"} href={"https://github.com/NeverwinterNights/norvegian/tree/main/norwau"} className={styles.portfolio__code}>Code</a>
                                            <a target={"_blank"} href={"https://neverwinternights.github.io/norvegian/norwau/"} className={styles.portfolio__demo}>Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src={photo2} alt=""/></div>
                                        <div className={styles.portfolio__title}>Title</div>
                                        <div className={styles.portfolio__footer}>
                                            <a target={"_blank"} href={"https://github.com/NeverwinterNights/new_agence"} className={styles.portfolio__code}>Code</a>
                                            <a target={"_blank"} href={"https://neverwinternights.github.io/new_agence/"} className={styles.portfolio__demo}>Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src={photo3} alt=""/></div>
                                        <div className={styles.portfolio__title}>Title</div>
                                        <div className={styles.portfolio__footer}>
                                            <a target={"_blank"} href={"https://github.com/NeverwinterNights/Bacery"} className={styles.portfolio__code}>Code</a>
                                            <a target={"_blank"} href={"https://neverwinternights.github.io/Bacery/"} className={styles.portfolio__demo}>Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__title}>Title</div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__title}>Title</div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__title}>Title</div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__title}>Title</div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__title}>Title</div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__title}>Title</div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};



