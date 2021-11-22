import React, {useEffect, useState} from 'react';
import styles from "./Home.module.scss";
import photo from "./../../img/my.jpg";
import arrow from "./../../img/arrow.svg";
import { NavLink } from 'react-router-dom';


type  NamePropsType = {
    clb: () => void
}

export const Home = (props: NamePropsType) => {

    const [customStyle, setCustomStyle] = useState(styles.wrapper)


    useEffect(() => {
       const id = setTimeout(() => setCustomStyle(styles.test), 0)

        return () => {
            setCustomStyle(styles.wrapper)
            clearTimeout(id)
        }
    }, [])


    return (

        <div className={customStyle}>

            <div className={styles.fullscreen}>
                <NavLink to="/header" className={styles.burger}><img src={arrow} alt=""/></NavLink>
                <div className={styles.fullscreen__body}>
                    <div className={styles.content}>
                        <div className={styles.content__body}>
                            <div className={styles.content__image}><img src={photo} alt=""/></div>
                            <div className={styles.content__info}>
                                <div className={styles.content__wrap}>
                                <div className={styles.content__sub}>HI THERE !</div>
                                <h1 className={styles.content__title}>I'M <span>Pavel</span></h1>
                                </div>
                                <div className={styles.content__text}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem ipsum delectus
                                    a, omnis odio at minima minus natus nostrum. Ut totam eaque veniam non vero, debitis
                                    alias
                                    voluptatem? Consequatur!
                                </div>
                                <div className={styles.content__buttons}>
                                    <NavLink to="/about"  className={styles.content__buttonme}><a href="" className={styles.link}>more
                                        about me</a>
                                    </NavLink>
                                    <NavLink to="/portfolio"  className={styles.content__buttonme}><a href=""
                                                                                 className={styles.link}>portfolio</a>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};



