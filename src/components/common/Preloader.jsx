import preloader from "../../assets/loader.gif";
import React from "react";
import styles from './Preloader.module.css';

let Preloader = () => {
    return <div className={styles.container}>
        <img alt='Loading....' className={styles.img} src={preloader}/>
    </div>
}

export default Preloader;