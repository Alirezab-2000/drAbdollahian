import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  className?: string;
  onPress?: () => void;
  setSmaller?: boolean;
}
export default function DRInformationItem({
  text,
  className,
  onPress,
  setSmaller,
}: Props) {
  return (
    <div
      onClick={onPress}
      className={styles.component_container + " " + className}
    >
      <div
        style={!setSmaller ? { display: "block" } : {}}
        className={styles.circle}
      />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
