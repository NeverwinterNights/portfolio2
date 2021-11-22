import React, {useEffect, useState} from 'react';
import styles from "./Contacts.module.scss";

export const Contacts = () => {

    const [customStyle, setCustomStyle] = useState(styles.wrapper)


    useEffect(() => {


        setTimeout(() => setCustomStyle(styles.test), 0)

        return () => {
            setCustomStyle(styles.wrapper)
        }
    }, [])


    return (
        <div className={styles.wrapper}>
            <div className={styles.fullscreen}>
                <div className={styles.fullscreen__body}>
                    <div className={styles.content}>
                        <div className={styles.content__title}>Contacts</div>
                    </div>
                </div>
            </div>
        </div>
    );
};



