import React from 'react';
import DRHeader from "../../components/DRHeader";
import styles from "./styles.module.scss"
import ImageMenuBox from "./ImageMenuBox";
import CircleImage from "./CircleImage";
import Assets from '../../Assets';

export default function Home() {
    return (
        <div className={styles.page_container}>
            <DRHeader/>
            <ImageMenuBox />
            <div className={styles.circles_box}>
                <CircleImage text={"عکس اول"} imageSource={Assets.Images.heartWithBody}/>
                <CircleImage text={"عکس دوم"} imageSource={Assets.Images.mainHeart}/>
                <CircleImage text={"عکس سوم"} imageSource={Assets.Images.heartWithBody}/>
            </div>
        </div>
    );
}
