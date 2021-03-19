import React from "react";
import styles from "./styles.module.scss";
import DRHeader from "../../components/DRHeader";
import DRInformationItem from "../../components/DRInformationItem";
import DrInformationMap from "../../components/DRInformationMap";
import { useHistory } from "react-router-dom";

export default function AboutUs() {
  const history = useHistory();
  return (
    <div className={styles.about_us_container}>
      <DRHeader />
      <div className={styles.container}>
        <div className={styles.green_box}>
          <DRInformationItem
            setSmaller={true}
            onPress={() => {
              history.push("essay/0");
            }}
            className={styles.links}
            text={"قلب چیست و چگونه کار میکند؟"}
          />
          <DRInformationItem
            setSmaller={true}
            onPress={() => {
              history.push("essay/1");
            }}
            className={styles.links}
            text={"متخصص قلب و عروق کیست؟"}
          />
          <DRInformationItem
            setSmaller={true}
            onPress={() => {
              history.push("essay/2");
            }}
            className={styles.links}
            text={"تاثیر ورزش بر سلامتی قلب چیست؟"}
          />
        </div>
        <div className={styles.content_box}>
          <DrInformationMap
            text={"کلینیک خاتم الانبیا"}
            mapText={"استان سمنان، سمنان، بلوار 17 شهریور"}
            mapLink={"https://goo.gl/maps/xXoUpMr2ZiYdL18MA"}
            callText={"023 3332 2773"}
          />
          <DrInformationMap
            text={"بیمارستان شفا"}
            mapText={"استان سمنان ،سمنان، بلواربلوار وحدت"}
            mapLink={"https://goo.gl/maps/h8QkQoH8rQo2r5zW7"}
            callText={"023 3344 2112"}
          />
          <DrInformationMap
            text={"بیمارستان سینا"}
            mapText={"استان سمنان ،بلوار امیرکبیر"}
            mapLink={"https://goo.gl/maps/twShYLePhB9u64cLA"}
            callText={"023 3348 3013"}
          />
          <DrInformationMap
            text={"کیلینیک امام رضا"}
            mapText={"استان سمنان:سمنان،میدان معلم"}
            mapLink={"https://goo.gl/maps/ZhTvXchnRSqq9ds97"}
            callText={"023 2182 5053"}
          />
          <DrInformationMap
            text={"بیمارستان 15 خرداد سنگسر"}
            mapText={"استان سمنان ، مهدیشهر، خیابان امام"}
            mapLink={"https://goo.gl/maps/8uPLrBFrzyJYfvmTA"}
            callText={"023 3362 2753"}
          />
        </div>
      </div>
    </div>
  );
}
