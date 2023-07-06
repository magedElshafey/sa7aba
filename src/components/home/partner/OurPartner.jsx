import React from "react";
import style from "./ourpartner.module.css";
import partnerImg from "../../../assets/partner.png";
import RedTitle from "../../utils/redTitle/RedTitle";
import MainBtn from "../../utils/mainBtn/MainBtn";
const OurPartner = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-center gap-3">
        <div className="col-12 col-md-4 d-flex flex-column align-items-center gap-2">
          <img
            className={style.img}
            loading="lazy"
            alt="partner/img"
            src={partnerImg}
          />
          <p className={`m-0 fs24 p-0 fw-bold  ${style.official}`}>
            <span className={`fw-bold  ${style.sponser}`}>sponser</span> |
            الشريك الرسمي
          </p>
        </div>
        <div className="col-12 col-md-7">
          <div className="d-flex align-items-center gap-1 justify-content-center justify-content-md-end">
            <p className={`m-0 p-0 fw-bold ${style.partner} dark`}>
              شراكة رسمية مع شركة
            </p>
            <p
              className={`red text-uppercase m-0 p-0 fw-bolder ${style.partner} `}
            >
              tickmill
            </p>
          </div>
          <p className="mx-0 mt-3 p-0 dark fw-bold lh text-center text-md-end">
            تداول مع وسيط موثوق لتنفيذ صفقاتك بدقة وامان مع شركة Tickmill الوسيط
            المالى الاكثر احترافية عالميا الشريك الرسمي لشركة أحمد الموسوي
            للتداول بدولة الكويت.
          </p>
          <div className="d-flex justify-content-center justify-content-md-end">
            <MainBtn text="اعرف اكثر" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
