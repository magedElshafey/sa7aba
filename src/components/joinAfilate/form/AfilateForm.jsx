import React, { useState } from "react";
import style from "./afilateForm.module.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight, MdOutlineArrowBackIos } from "react-icons/md";

const AfilateForm = ({ lang, setShowModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [tickMillUser, setTickmillUser] = useState(null);
  const [accountNum, setAccountNum] = useState("");
  const handleRadioChange = (event) => {
    setTickmillUser(event.target.value);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      password.trim() === ""
    ) {
      toast.error(
        i18n.language === "ar"
          ? "جميع الحقول مطلوبة"
          : "all field aree required"
      );
    } else {
      const res = await fetch(
        "https://almosawi.admin.technomasrsystems.com/api/affiliate/store",
        {
          method: "POST",
          headers: {
            lang,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            phone,
          }),
        }
      );
      const data = await res.json();
      console.log("this is the data from afilate", data);
      if (data.status) {
        toast.success(data.message);
        navigate("/afilator");
      } else {
        toast.error(data.message);
      }
    }
  };
  return (
    <div>
      <h4 className="green mb-4">
        {i18n.language === "ar"
          ? "قم بملء البيانات لتنضم لفريق التسويق الخاص بنا"
          : "Fill out the information to join our marketing team"}
      </h4>
      <form onSubmit={handleClick} className={style.mainContainer}>
        <div className="mb-3">
          <label htmlFor="name" className="d-block mb-1 green">
            {i18n.language === "ar" ? "الاسم" : "name"}
          </label>
          <input
            type="text"
            id="name"
            className="inp"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="d-block mb-1 green">
            {i18n.language === "ar" ? "رقم هاتف الواتساب" : "whatsapp"}
          </label>
          <input
            type="text"
            id="phone"
            className="inp"
            value={phone}
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="d-block mb-1 green">
            {i18n.language === "ar" ? "البريد الالكتروني" : "email"}
          </label>
          <input
            type="email"
            id="email"
            className="inp"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="d-block mb-1 green">
            {i18n.language === "ar" ? "كلمة المرور" : "password"}
          </label>
          <input
            type="password"
            id="password"
            className="inp"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="d-block mb-1 green">
            {i18n.language === "ar" ? "رقم حسابك" : "account number"}
          </label>
          <input
            type="number"
            id="number"
            className="inp"
            value={accountNum}
            name="password"
            onChange={(e) => setAccountNum(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="mb-3">
            <label htmlFor="question" className={`shamel fs15 `}>
              {t("customer")}{" "}
              <span className={`red  fw-bold text-uppercase`}>tikmill</span>
            </label>
            <div className="d-flex gap-5  align-items-center gap-3">
              <div>
                <input
                  value={1}
                  onChange={handleRadioChange}
                  type="radio"
                  id="yes"
                  className={`p-0 m-0  ${style.radio}`}
                  name="ask"
                />
                <label
                  htmlFor="yes"
                  className={`p-0 my-0 mx-1 fw-bold  shamel`}
                >
                  {t("yes")}
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="no"
                  className={`p-0 m-0  ${style.radio}`}
                  name="ask"
                  value={0}
                  onChange={handleRadioChange}
                />
                <label htmlFor="no" className={`p-0 my-0 mx-1 fw-bold  shamel`}>
                  {t("no")}
                </label>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center  mb-3">
            <p htmlFor="conditions" className={`m-0 p-0 fw-bold`}>
              {t("terms")}
            </p>
            <div>
              <input
                type="checkbox"
                id="conditions"
                className={`p-0 m-0  ${style.checkBox}`}
              />
              <label htmlFor="yes" className={`p-0 my-0 mx-1 fw-bold  shamel`}>
                {t("agree")}
              </label>
              <span
                onClick={() => setShowModal(true)}
                className={`pointer m-0 p-0 shamel  fw-bold ${style.condition}`}
              >
                {t("terms")}
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className={` ${style.btn}`} type="submit">
            {i18n.language === "en" ? (
              <MdKeyboardArrowRight size={20} />
            ) : (
              <MdOutlineArrowBackIos size={20} />
            )}
            <span>{i18n.language === "ar" ? "تقديم طلب" : "Apply"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AfilateForm;
