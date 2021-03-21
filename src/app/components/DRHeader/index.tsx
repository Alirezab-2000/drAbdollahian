import React from "react";
import { inspect } from "util";
import Assets from "../../Assets";
import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";

export default function DRHeader() {
  const history = useHistory();
  return (
    <div className={styles.header_box}>
      <p
        onClick={() => {
          history.push("/");
        }}
        className={styles.text}
      >
        دکتر فاطمه عبدالهیان متخصص قلب و عروق
      </p>
      <div className={styles.image_box}>
        <img
          className={styles.gmail_size}
          src={Assets.Images.gmail}
          onClick={() => {
            let link =
              "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDXXwGNWXDdbtfKcHsppbqFlDDpJRRzBMTnCXctrcsCCJnqXxNFcJCbHQqJvVcXGmtjLPdL";
            window.open(link, "_blank");
          }}
        />
        <img className={styles.instagram_size} src={Assets.Images.instagram} />
      </div>
    </div>
  );
}
