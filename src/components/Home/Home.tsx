import React, {useEffect, useState} from 'react';
import styles from "./Home.module.scss";
import photo from "./../../img/my.jpg";
import arrow from "./../../img/arrow.svg";


type  NamePropsType = {
    clb: () => void
}

export const Home = (props: NamePropsType) => {

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
                        <div className={styles.content__body}>
                            <div className={styles.content__image}><img src={photo} alt=""/></div>
                            <div className={styles.content__info}>
                                <div className={styles.content__sub}>HI THERE !</div>
                                <h1 className={styles.content__title}>I'M <span>Pavel</span></h1>
                                <div className={styles.content__text}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem ipsum delectus
                                    a, omnis odio at minima minus natus nostrum. Ut totam eaque veniam non vero, debitis
                                    alias
                                    voluptatem? Consequatur!
                                </div>
                                <div className={styles.content__buttons}>
                                    <div className={styles.content__buttonme}><a href="" className={styles.link}>more
                                        about me</a>
                                    </div>
                                    <div className={styles.content__buttonme}><a href=""
                                                                                 className={styles.link}>portfolio</a>
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



