import React from "react";
import DRHeader from "../../components/DRHeader";
import styles from "./styles.module.scss";
import ImageMenuBox from "./ImageMenuBox";
import CircleImage from "./CircleImage";
import Assets from "../../Assets";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  return (
    <div className={styles.page_container}>
      <DRHeader />
      <ImageMenuBox />
      <div className={styles.circles_box}>
        <CircleImage
          onPress={() => {
            history.push("/essay/0");
          }}
          text={"قلب چیست و چگونه کار میکند؟"}
          imageSource={Assets.Images.heartWithBody}
        />
        <CircleImage
          onPress={() => {
            history.push("/essay/1");
          }}
          text={"متخصص قلب و عروق کیست؟"}
          imageSource={Assets.Images.mainHeart}
        />
        <CircleImage
          onPress={() => {
            history.push("/essay/2");
          }}
          text={"تاثیر ورزش بر سلامتی قلب"}
          imageSource={Assets.Images.heartWithBody}
        />
      </div>
    </div>
  );
}
