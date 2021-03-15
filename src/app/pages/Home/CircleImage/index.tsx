import React from "react";
import styles from "./styles.module.scss";

interface Props {
  imageSource: string;
  text: string;
  onPress: () => void;
}
export default function CircleImage({ text, imageSource, onPress }: Props) {
  return (
    <div onClick={onPress} className={styles.component_box}>
      <div className={styles.circle}>
        <img className={styles.img} src={imageSource} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
