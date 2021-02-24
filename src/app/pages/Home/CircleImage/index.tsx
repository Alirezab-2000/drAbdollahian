import React from 'react';
import styles from "./styles.module.scss"

interface Props{
    imageSource: string;
    text:string;
}
export default function CircleImage({text,imageSource} : Props) {
    return (
        <div className={styles.component_box}>
            <div className={styles.circle}>
                <img className={styles.img} src={imageSource}/>
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    );
}
