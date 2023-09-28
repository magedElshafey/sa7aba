import React, { useState, useEffect } from "react";
import style from "./nav.module.css";
import { BiLogOut } from "react-icons/bi";
import { BsFillPersonFill, BsFillTelephoneFill, BsGlobe } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import callIcon from "../../../assets/help-desk-log-svgrepo-com.svg";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import pyramids from "../../../assets/aboutCourses/pyramidsDefault.png";
import energy from "../../../assets/aboutCourses/energyDefault.png";
import person from "../../../assets/aboutCourses/personDefault.png";
import { useTranslation } from "react-i18next";
import ahmed from "../../../assets/a7medAv.png";
import chat from "../../../assets/chat-bubble-check-svgrepo-com.png";
import menu from "../../../assets/menu.svg";
import close from "../../../assets/cross.png";

const Nav = ({ data }) => {
  const { t, i18n } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showProchart, setShowPorchart] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const { pathname } = useLocation();
  const [showLogo, setShowLogo] = useState(true);
  const [showAsk, setShowAsk] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      pathname === "/forget" ||
      pathname === "/login" ||
      pathname === "/new-password" ||
      pathname === "/reg"
    ) {
      setShowLogo(false);
    } else {
      setShowLogo(true);
    }
  }, [pathname]);
  useEffect(() => {
    if (pathname === "/forex-account/details") {
      setShowAsk(true);
    } else {
      setShowAsk(false);
    }
  }, [pathname]);

  return (
    <>
      <div>
        <div className={style.navContainer}>
          <div className="container py-3 ">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Link className={`${showLogo ? "d-block" : "d-none"}`} to="/">
                  <img
                    alt="logo/img"
                    loading="lazy"
                    src={data.logo}
                    className={style.logo}
                  />
                </Link>
                <div className="dropdown">
                  <button
                    className={`${style.none} dropdown-toggle`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BsGlobe size={30} className="pointer whiteGreen" />
                  </button>
                  <ul class="dropdown-menu">
                    <li
                      onClick={() => {
                        window.location.reload();
                        i18n.changeLanguage("ar");
                        window.localStorage.setItem(
                          "lang",
                          JSON.stringify("ar")
                        );
                      }}
                      className="dropdown-item pointer"
                    >
                      ar
                    </li>
                    <li
                      onClick={() => {
                        window.location.reload();
                        i18n.changeLanguage("en");
                        window.localStorage.setItem(
                          "lang",
                          JSON.stringify("en")
                        );
                      }}
                      className="dropdown-item pointer"
                    >
                      EN
                    </li>
                  </ul>
                </div>
              </div>
              {showAsk ? (
                <div className="d-flex align-items-center gap10">
                  <div className="position-relative">
                    <Link to="/ask" className={style.rec}>
                      <img src={chat} alt="chat/icon" className={style.chat} />
                      <p className={`fs text-white m-0 p-0 book ${style.ask}`}>
                        اسأل احمد الموسوي
                      </p>
                    </Link>
                    <div className={style.circle}>
                      <img
                        className={style.ahmed}
                        alt="ahmed/img"
                        src={ahmed}
                      />
                    </div>
                  </div>
                  <div
                    onClick={() => setShowSidebar(true)}
                    className={`d-flex align-items-center gap-1 pointer ${
                      showLogo ? null : "me-auto"
                    }`}
                  >
                    <div
                      className={` position-relative ${style.spanContainer}`}
                    >
                      <span className={`${style.span} ${style.first}`}></span>
                      <span className={`${style.span} ${style.second}`}></span>
                      <span className={`${style.span} ${style.third}`}></span>
                    </div>
                    <h3 className="text-white fs22 mt-3 book">القائمة</h3>
                  </div>
                </div>
              ) : (
                <div className="d-flex align-items-center gap-1">
                  <button
                    onClick={() => navigate("/login")}
                    className={`mx-3 ${style.btn}`}
                  >
                    {i18n.language === "ar" ? "تسجيل الدخول" : "login"}
                  </button>
                  <div
                    onClick={() => setShowSidebar(true)}
                    className={`pointer ${showLogo ? null : "me-auto"}`}
                  >
                    <img
                      alt="menu/icon"
                      className={style.menu}
                      src={menu}
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`${style.sidebar} ${
            showSidebar ? style.show : style.hide
          }`}
        >
          <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center">
              <p className="p-0 m-0 fw-bold fs22 shamel text-white">
                {t("menu")}
              </p>

              <div className="d-flex align-items-center gap-2">
                <img
                  onClick={() => setShowSidebar(false)}
                  loading="lazy"
                  alt="close/icon"
                  className={`${style.closeIcon} pointer`}
                  src={close}
                />

                <p className="text-white m-0 p-0 book fs18">إغلاق</p>
              </div>
            </div>

            <div className="pt-5 row justify-content-center">
              <div className="mb-3 mb-lg-0 col-12 col-md-6 col-lg-3">
                <p className="m-0 p-0 text-white fw-bold shamel ">
                  {t("courses")}
                </p>
                <div className={`${style.box} mb-4`}>
                  <img
                    alt="prochart/img"
                    loading="lazy"
                    src="https://images.pexels.com/photos/5716016/pexels-photo-5716016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className={style.imgTwo}
                  />
                  <p className={style.contentThree}>{t("creativity")}</p>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/course/1"
                    className={`d-block book  text-white p-1 ${style.border} ${style.link}`}
                  >
                    <img
                      className={style.imgIcon}
                      loading="lazy"
                      src={pyramids}
                      alt="levels/img"
                    />
                    <span>{t("marketLevel")}</span>
                  </Link>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/course/2"
                    className={`d-block   text-white p-1 book ${style.border} ${style.link}`}
                  >
                    <img
                      className={style.imgIcon}
                      loading="lazy"
                      src={person}
                      alt="levels/img"
                    />
                    <span>{t("ProfessionalLevel")}</span>
                  </Link>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/course/3"
                    className={`d-block  text-white p-1 book ${style.link}`}
                  >
                    <img
                      className={style.imgIcon}
                      loading="lazy"
                      src={energy}
                      alt="levels/img"
                    />
                    <span>{t("ExpertLevel")}</span>
                  </Link>
                </div>
                <div className={`position-relative mt-3 ${style.box}`}>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/about"
                    className={`${style.aboutContainer} ${
                      showAbout ? style.showBox : style.hideBox
                    }`}
                  >
                    {t("about")}
                  </Link>
                  <img
                    onMouseEnter={() => setShowAbout(true)}
                    onMouseLeave={() => setShowAbout(false)}
                    alt="prochart/img"
                    loading="lazy"
                    src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className={style.imgTwo}
                  />
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/about"
                    className={`book d-block text-white p-1 ${style.link}`}
                  >
                    <MdKeyboardArrowLeft size={30} className="green" />
                    {t("aboutCompany")}
                  </Link>
                </div>
              </div>
              <div className="mb-3 mb-lg-0 col-12 col-md-6 col-lg-3">
                <p className="m-0 p-0 text-white fw-bold shamel">
                  {t("tradingAccounts")}
                </p>
                <div className={style.box}>
                  <img
                    alt="prochart/img"
                    loading="lazy"
                    src="https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className={style.imgimg}
                  />
                  <p className={style.contentTwo}>{t("tadwl")}</p>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/account/special"
                    className={`book d-block  text-white p-1 ${style.border} ${style.link}`}
                  >
                    <MdKeyboardArrowLeft size={30} className="green" />
                    {t("specialAccounts")}
                  </Link>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/account/max"
                    className={`book d-block text-white p-1 ${style.link} `}
                  >
                    <MdKeyboardArrowLeft size={30} className="green" />
                    {t("safeAccount")}
                  </Link>
                </div>
                <div
                  onMouseEnter={() => setShowPorchart(true)}
                  onMouseLeave={() => setShowPorchart(false)}
                  className={`mt-3 pt-2 ${style.box} position-relative`}
                >
                  <img
                    alt="prochart/img"
                    loading="lazy"
                    src="https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className={style.imgTwo}
                  />
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/contact"
                    className={`book d-block  text-white p-1 ${style.link}`}
                  >
                    <MdKeyboardArrowLeft size={30} className="green" />
                    {t("sendMsg")}
                  </Link>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/prochart"
                    className={`text-white d-flex align-items-center justify-content-center p-2 ${
                      style.porchartBox
                    } ${showProchart ? style.showBox : style.hideBox}`}
                  >
                    <p className="lh m-0 p-0">تواصل معنا</p>
                  </Link>
                </div>
              </div>
              <div className="mb-3 mb-lg-0 col-12 col-md-6 col-lg-3  position-relative">
                <p className="m-0 p-0 text-white fw-bold shamel">
                  {t("prochart")}
                </p>
                <div className={`${style.box} `}>
                  <img
                    alt="prochart/img"
                    loading="lazy"
                    src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className={style.mainImg}
                  />

                  <p className={`m-0 p-0 ${style.content}`}>{t("prochart")}</p>
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/prochart"
                    className={`book d-block  text-white p-1 ${style.link}`}
                  >
                    <MdKeyboardArrowLeft size={30} className="green" />
                    {t("prochart")}
                  </Link>
                </div>
              </div>
              <div className={`col-12 col-md-6 col-lg-3 `}>
                <ul className=" m-0 p-0">
                  <li className="mb-2">
                    <Link
                      onClick={() => setShowSidebar(false)}
                      className={`book text-white  ${style.link}`}
                      to="/login"
                    >
                      <BiLogOut
                        className="green d-inline-block mx-1 "
                        size={20}
                      />
                      {t("login")}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      onClick={() => setShowSidebar(false)}
                      className={`book text-white ${style.link}`}
                      to="/reg"
                    >
                      <BsFillPersonFill
                        className="green d-inline-block mx-1 "
                        size={20}
                      />
                      {t("reg")}
                    </Link>
                  </li>
                  <li className="mb-2 mt-4 ">
                    <Link
                      onClick={() => setShowSidebar(false)}
                      className={`book text-white ${style.link}`}
                      to="/consulting"
                    >
                      <MdOutlineKeyboardDoubleArrowRight
                        className="green d-inline-block mx-1 "
                        size={25}
                      />
                      {t("consultation")}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      onClick={() => setShowSidebar(false)}
                      className={`book text-white ${style.link}`}
                      to="/about"
                    >
                      <MdKeyboardArrowLeft
                        className="green d-inline-block mx-1 "
                        size={25}
                      />
                      {t("about")}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      onClick={() => setShowSidebar(false)}
                      className={`book text-white ${style.link}`}
                      to="/contact"
                    >
                      <MdKeyboardArrowLeft
                        className="green d-inline-block mx-1 "
                        size={25}
                      />
                      {t("contact us")}
                    </Link>
                  </li>
                </ul>
                <div
                  className={`mx-auto  p-3  d-flex flex-column align-items-center gap-1 ${style.contactContainer}`}
                >
                  <img
                    loading="lazy"
                    alt="contact/icon"
                    src={callIcon}
                    className="mb-2"
                  />

                  <p className="text-white m-0 p-0 book">{t("contact us")}</p>
                  <p className="fw-bold m-0 p-0 green shamel fs22">
                    {t("help")}
                  </p>
                  <p className="green m-0 p-0 d-flex gap-1 align-items-center">
                    <span className="fw-bold shamel fs22 mt-1 ">252158</span>
                    <BsFillTelephoneFill size={20} />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
/*
  <select onChange={handleChangeLanguage} className="py-5">
            <option></option>
            <option>en</option>
          </select>
*/
