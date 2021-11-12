
import React from 'react';
import styles from "./About.module.scss";
import container from "../Common/Styles/Container.module.scss";

export const About =() => {
 return (
     <div className={styles.wrapper}>
         <div className={styles.fullscreen}>
             <div className={styles.fullscreen__body}>
                 <div className={styles.content}>
                     <div className={styles.content__title}>About</div>
                 </div>
             </div>
         </div>
     </div>
    );
};



