import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  className?: string;
  onPress?: () => void;
}
export default function DRInformationItem({ text, className, onPress }: Props) {
  return (
    <div
      onClick={onPress}
      className={styles.component_container + " " + className}
    >
      <div className={styles.circle} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
