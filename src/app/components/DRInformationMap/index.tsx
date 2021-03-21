import React from "react";
import styles from "./styles.module.scss";
import DRInformationItem from "../DRInformationItem";
import Assets from "../../Assets";

interface Props {
  text: string;
  mapText?: string;
  mapLink?: string;
  callText?: string;
  childTexts?: string[];
}
export default function DrInformationMap({
  text,
  callText,
  mapLink,
  mapText,
  childTexts,
}: Props) {
  return (
    <div className={styles.component_container}>
      <DRInformationItem text={text} />
      <div className={styles.map_telephone_box}>
        {!childTexts ? (
          <>
            <div
              onClick={() => {
                window.open(mapLink, "_blank");
              }}
              className={styles.map_box}
              style={{ cursor: "pointer" }}
            >
              <img className={styles.image_container} src={Assets.Images.map} />
              <p className={styles.text}>{mapText}</p>
            </div>
            <div className={styles.map_box}>
              <img
                className={styles.image_container}
                src={Assets.Images.telephone}
              />
              <p className={styles.call_text}>{callText}</p>
            </div>
          </>
        ) : (
          childTexts.map((value, index) => {
            return (
              <div key={index} className={styles.map_box}>
                <p className={styles.text}>{value}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
