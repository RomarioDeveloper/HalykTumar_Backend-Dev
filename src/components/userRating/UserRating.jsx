import React from 'react';
import { useTranslation } from "react-i18next";
import "./UserRating.css"

import BurgerMenu from "../burgerMenu/BurgerMenu";

import arrow from "../../app/img/arrow.png";
import men1 from "../../app/img/men1.jpg"
import men2 from "../../app/img/men2.jpg"
import women1 from "../../app/img/women1.jpg"
import women2 from "../../app/img/women2.jpg"
import women3 from "../../app/img/women3.jpg"


function UserRating() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  return (
    <div className="mt-8 mr-2 ml-2">
      <nav className="fixed top-0 left-0 w-full lg:hidden md:hidden flex justify-center items-center z-50">
        <h1 className="text-xl font-bold text-white">{t("User rating")}</h1>
        <button className='text-white	bg-slate-600 p-2.5 rounded-lg ml-5' onClick={() => changeLanguage("kz")}>KZ</button>
          <button className='text-white	bg-slate-600 p-2.5 rounded-lg' onClick={() => changeLanguage("ru")}>RU</button>
          <BurgerMenu />
      </nav>
      <ul>
        <li className="flex p-2 items-center hover:bg-gray-100 border-b-2 border-gray-100 rounded-xl relative">
          <img src={men1} className="w-12 md:w-20 rounded-full" alt="Profile" />
          <div className="flex flex-col ml-4">
            <span className="text-base font-semibold text-gray-800">Дария Ертаева</span>
            <span className="text-base text-gray-500">1 730 {t("points")}</span>
          </div>
          <img src={arrow} className="absolute right-4 w-8" alt="Arrow icon" />
        </li>
        <li className="flex p-2 items-center hover:bg-gray-100 border-b-2 border-gray-100 rounded-xl relative">
          <img src={men2} className="w-12 md:w-20 rounded-full" alt="Profile" />
          <div className="flex flex-col ml-4">
            <span className="text-base font-semibold text-gray-800">Наталья</span>
            <span className="text-base text-gray-500">1 450 {t("points")}</span>
          </div>
          <img src={arrow} className="absolute right-4 w-8" alt="Arrow icon" />
        </li>
        <li className="flex p-2 items-center hover:bg-gray-100 border-b-2 border-gray-100 rounded-xl relative">
          <img src={men1} className="w-12 md:w-20 rounded-full" alt="Profile" />
          <div className="flex flex-col ml-4">
            <span className="text-base font-semibold text-gray-800">Илья</span>
            <span className="text-base text-gray-500">1 230 {t("points")}</span>
          </div>
          <img src={arrow} className="absolute right-4 w-8" alt="Arrow icon" />
        </li>
        <li className="flex p-2 items-center hover:bg-gray-100 border-b-2 border-gray-100 rounded-xl relative">
          <img src={women1} className="w-12 md:w-20 rounded-full" alt="Profile" />
          <div className="flex flex-col ml-4">
            <span className="text-base font-semibold text-gray-800">Игорь</span>
            <span className="text-base text-gray-500">980 {t("points")}</span>
          </div>
          <img src={arrow} className="absolute right-4 w-8" alt="Arrow icon" />
        </li>
        <li className="flex p-2 items-center hover:bg-gray-100 border-b-2 border-gray-100 rounded-xl relative">
          <img src={women2} className="w-12 md:w-20 rounded-full" alt="Profile" />
          <div className="flex flex-col ml-4">
            <span className="text-base font-semibold text-gray-800">Ильяс</span>
            <span className="text-base text-gray-500">950 {t("points")}</span>
          </div>
          <img src={arrow} className="absolute right-4 w-8" alt="Arrow icon" />
        </li>
        <li className="flex p-2 items-center hover:bg-gray-100 border-b-2 border-gray-100 rounded-xl relative">
          <img src={women3} className="w-12 md:w-20 rounded-full" alt="Profile" />
          <div className="flex flex-col ml-4">
            <span className="text-base font-semibold text-gray-800">Екатерина</span>
            <span className="text-base text-gray-500">750 {t("points")}</span>
          </div>
          <img src={arrow} className="absolute right-4 w-8" alt="Arrow icon" />
        </li>
      </ul>
    </div>
  );
}

export default UserRating;
