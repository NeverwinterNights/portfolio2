
import React from 'react';
import styles from "./Portfolio.module.scss";
import container from "../Common/Styles/Container.module.scss";

export const Portfolio =() => {
 return (
     <div className={styles.wrapper}>
         <div className={styles.fullscreen}>
             <div className={styles.fullscreen__body}>
                 <div className={styles.content}>
                     <div className={styles.content__title}>Portfolio</div>
                 </div>
             </div>
         </div>
     </div>
    );
};



