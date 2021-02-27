import React from 'react';
import { useHistory } from 'react-router-dom';
import Assets from '../../../Assets';
import styles from "./styles.module.scss"

export default function ImageMenuBox() {
    const history = useHistory();
    return (
        <div style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0) 0% ,rgba(100, 100, 100 , .8)), url('${Assets.Images.doctors}')`,
        }} className={styles.image_menu_box}>
            <div className={styles.menu_box}>
                <div className={styles.menu_item}>
                    <p>صفحه اصلی</p>
                </div>
                <div className={styles.menu_item}>
                    <p>درباره دکتر</p>
                </div>
                <div onClick={() => {
                    history.push("/aboutUs")
                }} className={styles.menu_item}>
                    <p>تماس با ما</p>
                </div>
            </div>
            <div className={styles.image}/>
        </div>
    );
}
