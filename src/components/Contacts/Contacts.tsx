
import React from 'react';
import styles from "./Contacts.module.scss";
import container from "../Common/Styles/Container.module.scss";
export const Contacts =() => {
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



