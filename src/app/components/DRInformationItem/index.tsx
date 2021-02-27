import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
}
export default function DRInformationItem({ text }: Props) {
  return (
    <div className={styles.component_container}>
      <div className={styles.circle} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
