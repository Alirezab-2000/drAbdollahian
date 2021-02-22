import React from 'react';
import {inspect} from "util";
import Assets from '../../Assets';
import styles from "./styles.module.scss"

export default function DRHeader() {
    return (
        <div className={styles.header_box}>
            <p className={styles.text}>دکتر عبدالهیان متخصص  قلب و عروق</p>
            <div className={styles.image_box}>
                <img className={styles.gmail_size} src={Assets.Images.gmail}/>
                <img className={styles.instagram_size} src={Assets.Images.instagram}/>
            </div>
        </div>
    );
}
