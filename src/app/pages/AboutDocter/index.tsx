import React from "react";
import styles from "../AboutUs/styles.module.scss";
import DRHeader from "../../components/DRHeader";
import DrInformationMap from "../../components/DRInformationMap";
import DRInformationItem from "../../components/DRInformationItem";
import { useHistory } from "react-router-dom";

export default function AboutDocter() {
  const history = useHistory();
  return (
    <div className={styles.about_us_container}>
      <DRHeader />
      <div className={styles.container}>
        <div className={styles.green_box}>
          <DRInformationItem
            onPress={() => {
              history.push("essay/0");
            }}
            className={styles.links}
            text={"قلب چیست و چگونه کار میکند؟"}
          />
          <DRInformationItem
            onPress={() => {
              history.push("essay/1");
            }}
            className={styles.links}
            text={"متخصص قلب و عروق کیست؟"}
          />
          <DRInformationItem
            onPress={() => {
              history.push("essay/2");
            }}
            className={styles.links}
            text={"تاثیر ورزش بر سلامتی قلب چیست؟"}
          />
        </div>
        <div className={styles.content_box}>
          <DrInformationMap
            text={"فاطمه عبدالهیان"}
            childTexts={[
              "drabdollahianinfo@gmail.com",
              "متولد : 1355",
              "ساکن : سمنان",
            ]}
          />

          <DrInformationMap
            text={"سوابق تحصیلی"}
            childTexts={[
              "تخصص قلب و عرق - دانشگاه علوم پزشکی مازندران [90 - 1386] ",
              " همکاری با کمیته پژوهشی دانشگاه و برگزای work shop",
              "گذراندن قسمتی از دوره رزیدنتی در بیمارستان شهید رجایی تهران",
              "چاپ مقاله پایان نامه در",
              "1- Annals Thoracic & Cardiovascular Asian",
              "2- (Remote ischemic preconditioningin percutaneous coronary",
              "3- revascularization: A double-blind randomized controlled clinical trial)",
              "چاپ مقاله تحقیقاتی در",
              "1- Iranica Medica Acta",
              "2- (Short Term Therapy With High Dose Athorvastatin)",
              "پزشکی عمومی - دانشگاه علوم پزشکی شهید بهشتی [80 - 1373] ",
              `ترجمه کتاب از انگلیسی به فارسی ( مرجع کامل 7 Delphi نویسنده: مارک کانتو )`,
              "تدریس به شکل عمومی و خصوصی در اموزشگاه دخترانه دهخدا",
              " همکاری با کمیته پژوهشی دانشگاه و برگزای work shop",
              "دوره دبیرستان و راهنمایی - مرکزاستعداد های درخشان [72 - 1366] ",
            ]}
          />

          <DrInformationMap
            text={"سوابق حرفه ای"}
            childTexts={[
              "رییس مرکز بهداشتی درمانی - دمشاد بالا - شهریار [83 - 1380] ",
              "ماموریت کمک به زلزله زدگان بم در اسفند 1382",
              " همکاری با آموزش و پرورش در طرح پایش",
              " همکاری با کانون هموفیلی",
              "پژوهشگر - کلینیک چشم پزشکی راضی [86 - 1383] ",
              `کار با دستگاه لیزیک ،آناالیزر و توپوالیزر الگرتو`,
              " انجام کارهای تحقیقاتی و تالیف کتاب (مبانی و کاربرد بالینی توپوگرافی قرنیه)",
              " سفر به کویت جهت نصب و آموزش کار با دستگاه  لیزیک ،آناالیزر و توپوالیزر الگرتو",
              "همکاری با هالل احمر به عنوان پزشک کاروان حج عمره",
              "متخصص قلب و بیمارستان 15 خرداد - مهدیشهر - سمنان [از دی 1390] ",
              "به عنوان ضریب k",
              "خدمت در بیمارستان صحرایی فوالد محله",
              "برگزاری کالسهای اموزشی در بیمارستان",
              "فعالیت به عنوان پزشک معتمد ناجا در کلینیک امام رضا (ع) سمنان",
              "فعالیت در کلینیک خاتم االنبیا(ع) سمنان",
              "همکاری با بیمارستان تامین اجتماعی سمنان",
              "همکاری با دارالشفا مهدیشهر",
              "همکاری با درمانگاه فاطمه زهرا (س) مهدیشهر",
              "همکاری با مجمع خیرین سالمت مهدیشهر",
            ]}
          />

          <DrInformationMap
            text={"مهارت ها"}
            childTexts={[
              "مهارت های نرم افزاری",
              "1- تسلط کامل به نرم افزار های کامپیوتری و اینترنت",
              "اشنایی با زبان های خارجی",
              "1- انگلیسی به صورت کامل و تا حدودی عربی و فرانسه",
              "سایر مهارت ها",
              "1- فن بیان و کوشایی",
              `2- مسئولیت پذیری وتعهد`,
              "3-  مهارت تدریس پویاوفعال",
              "4-  مهارت در ورزش کوهنوردی و سنگ نوردی و شنا",
              "5-  آشنا با شعر وادبیات",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
