import React, {useEffect, useState} from 'react';
import styles from "./Portfolio.module.scss";
import {NavLink} from "react-router-dom";
import arrow from "../../img/arrow.svg";

export const Portfolio = () => {

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
                <NavLink to="/header" className={styles.burger}><img src={arrow} alt=""/></NavLink>

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
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
                                        <div className={styles.portfolio__footer}>
                                            <div className={styles.portfolio__code}>Code</div>
                                            <div className={styles.portfolio__demo}>Demo</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__column}>
                                    <div className={styles.portfolio__item}>
                                        <div className={styles.portfolio__image}><img src="img/" alt=""/></div>
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



