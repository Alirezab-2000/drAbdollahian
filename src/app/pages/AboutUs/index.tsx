import React from "react";
import styles from "./styles.module.scss";
import DRHeader from "../../components/DRHeader";
import DRInformationItem from "../../components/DRInformationItem";
import DrInformationMap from "../../components/DRInformationMap";

export default function AboutUs() {
  return (
    <div className={styles.about_us_container}>
      <DRHeader />
      <div className={styles.container}>
        <div className={styles.green_box} />
        <div className={styles.content_box}>
          <DRInformationItem text={"تست اول"} />
          <DrInformationMap
            text={"بسیار عالی"}
            mapText={"دبیرستان"}
            mapLink={"www.google.com"}
            callText={"0912828282"}
          />
        </div>
      </div>
    </div>
  );
}
