import React from 'react';
import { useTranslation } from "react-i18next";
import BurgerMenu from "../burgerMenu/BurgerMenu";

import Men from "../../app/img/wishMen.jpg"

function WishScreen() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  return (
    <body className="">
      <nav className="fixed top-0 left-0 w-full lg:hidden md:hidden flex justify-center items-center z-50">
        <h1 className="text-xl font-bold text-white">{t("Wish")}</h1>
        <button className='text-white	bg-slate-600 p-2.5 rounded-lg ml-5' onClick={() => changeLanguage("kz")}>KZ</button>
            <button className='text-white	bg-slate-600 p-2.5 rounded-lg' onClick={() => changeLanguage("ru")}>RU</button>
          <BurgerMenu />
      </nav>
      <header className="bg-indigo-950 pt-14 py-6">
        <section className="mx-4 items-start md:w-2/3 md:m-auto flex md:items-center text-white text-wrap">
          <img src={Men} className="h-32 w-32 object-cover rounded-lg" alt="image" />
          <h1 className="pl-4">✨ {t("you help")} <br />
          {t("Write your wishes")}</h1>
        </section>
      </header>
      <form className="mx-4 md:w-2/3 md:m-auto mt-4">
        <div>
          <label htmlFor="textarea" className="my-2 flex items-center justify-between text-sm">
          {t("Wish")}
            <p className="text-gray-400 text-xs">{t("Mandatory")}</p>
          </label>
          <textarea id="textarea" className="shadow border rounded-lg w-full h-24 py-2 px-3 leading-tight focus:outline-blue-600 focus:shadow-outline" placeholder={t("Missing function...")}></textarea>
        </div>
        <p className="text-gray-300 text-sm text-right">0/500</p>
        <input type="submit" value={t("Send")} className="text-base p-2 rounded-lg bg-blue-700 text-white w-full lg:w-1/2 m-auto text-center mt-4 flex items-center justify-center" />
      </form>
    </body>
  );
}

export default WishScreen;
