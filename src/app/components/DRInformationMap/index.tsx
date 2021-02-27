import React from "react";
import styles from "./styles.module.scss";
import DRInformationItem from "../DRInformationItem";
import Assets from "../../Assets";

interface Props {
  text: string;
  mapText: string;
  mapLink: string;
  callText: string;
}
export default function DrInformationMap({
  text,
  callText,
  mapLink,
  mapText,
}: Props) {
  return (
    <div className={styles.component_container}>
      <DRInformationItem text={text} />
      <div className={styles.map_telephone_box}>
        <div
          onClick={() => {
            window.location.href = mapLink;
          }}
          className={styles.map_box}
        >
          <img className={styles.image_container} src={Assets.Images.map} />
          <p className={styles.text}>{mapText}</p>
        </div>

        <div className={styles.map_box}>
          <img
            className={styles.image_container}
            src={Assets.Images.telephone}
          />
          <p className={styles.text}>{mapText}</p>
        </div>
      </div>
    </div>
  );
}
