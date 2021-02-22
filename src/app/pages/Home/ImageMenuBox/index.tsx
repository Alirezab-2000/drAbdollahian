import React from 'react';
import Assets from '../../../Assets';
import styles from "./styles.module.scss"

export default function ImageMenuBox() {
    return (
        <div className={styles.image_menu_box}>
            <div className={styles.menu_box}>
                <div className={styles.menu_item}>
                    <p>صفحه اصلی</p>
                </div>
                <div className={styles.menu_item}>
                    <p>درباره دکتر</p>
                </div>
                <div className={styles.menu_item}>
                    <p>تماس با ما</p>
                </div>
            </div>
            <div className={styles.image}/>
        </div>
    );
}
