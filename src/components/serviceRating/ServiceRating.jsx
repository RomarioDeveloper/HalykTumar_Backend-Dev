import React from 'react';
import { useTranslation } from "react-i18next";
import "./ServiceRating.css"

import BurgerMenu from "../burgerMenu/BurgerMenu";

import flag from "../../app/img/flag.jpg"
import gerb from "../../app/img/gerb.jpg"
import star from "../../app/img/star.jpg"

function ServiceRating() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  return (
    <div className="mr-4 ml-4 pt-8">
      <nav className="fixed top-0 left-0 w-full lg:hidden md:hidden flex justify-center items-center z-50">
        <h1 className="text-xl font-bold text-white">{t("Department rating")}</h1>
        <button className='text-white	bg-slate-600 p-2.5 rounded-lg ml-5' onClick={() => changeLanguage("kz")}>KZ</button>
          <button className='text-white	bg-slate-600 p-2.5 rounded-lg' onClick={() => changeLanguage("ru")}>RU</button>
        <BurgerMenu />
      </nav>
      <ul className="">
        <li className="font-semibold flex p-2 items-center hover:bg-gray-100 border-b-2 border-gray-100 rounded-xl relative">
          <img src={gerb} className="w-16 md:w-20 h-auto rounded-lg" alt="Department 1" />
          <div className="flex flex-col ml-4">
            <span className="text-sm text-blue-700 flex items-center"><img src={star} className="pr-2 w-5 h-3" alt="Star icon" />5,0</span>
            <span className="text-base"> Полиция Г. Аксу</span>
          </div>
        </li>
        <li className="font-semibold flex p-2 items-center hover:bg-gray-100 border-b-2 border-gray-100 rounded-xl relative">
          <img src={flag} className="w-16 md:w-20 h-auto rounded-lg" alt="Department 2" />
          <div className="flex flex-col ml-4">
            <span className="text-xs text-blue-700 flex items-center"><img src={star} className="pr-2 w-5 h-3" alt="Star icon" />НЕТ РЕЙТИНГА</span>
          </div>
        </li>
        <li className="font-semibold flex p-2 items-center hover:bg-gray-100 border-b-2 border-gray-100 rounded-xl relative">
          <img src={flag} className="w-16 md:w-20 h-auto rounded-lg" alt="Department 3" />
          <div className="flex flex-col ml-4">
            <span className="text-xs text-blue-700 flex items-center"><img src={star} className="pr-2 w-5 h-3" alt="Star icon" />НЕТ РЕЙТИНГА</span>
            <span className="text-base">Депутат Щербактинского района</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ServiceRating;
