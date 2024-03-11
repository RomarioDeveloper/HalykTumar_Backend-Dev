import React from "react";
import { useTranslation } from "react-i18next";
import BurgerMenu from "../burgerMenu/BurgerMenu";

import imagePlus from "../../app/img/imagePlus.png";
import Plus from "../../app/img/plus.png"

import "./Appeal.css";

const Appeal = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  async function createPost(title, appeal, description, date, status, address, place) {
    try {
      const resp = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: 1,
          department_id: 2,
          title: title,
          appeal: appeal,
          place: place,
          description: description,
          date: date,
          status: status,
          address: address
        })
      });
      const data = await resp.json();
      console.log(data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  
  createPost('ЗАГОЛОВОК', 'ТИП', 'ОПИСАНИЕ', '2024-03-03', 'В РАБОТЕ', 'АДРЕС', 'МЕСТО')
  return (
    <article className="w-full pt-10 pb-20">
      <nav className="fixed top-0 left-0 w-full lg:hidden md:hidden flex justify-center items-center z-50">
        <h1 className="text-xl font-bold text-white">{t("Add a request")}</h1>
        <button className='text-white	bg-slate-600 p-2.5 ml-5' onClick={() => changeLanguage("kz")}>KZ</button>
          <button className='text-white	bg-slate-600 p-2.5' onClick={() => changeLanguage("ru")}>RU</button>
        <BurgerMenu />
      </nav>
      <form className="formAdd">
        <div>
          <label className="text-gray-700 text-sm font-bold mb-1 mt-5 flex items-center justify-between">
              {t("Appeal image")}
            <p className="gray-text text-gray-500">{t("Mandatory")}</p>
          </label>
          <label htmlFor="okn" className="border rounded-lg w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline flex items-center mb-6 text-xs">
            <img className="pr-2" src={imagePlus} alt="Select" />
            {t("Select an image...")}
          </label>
          <input type="file" className="my" id="okn" name="okn" />
          <label htmlFor="myfile" className="chous font-medium rounded-lg bg-blue-700 text-white w-full md:w-1/2 flex items-center justify-center">
            <img className="mr-2" src={Plus} alt="Add" />
            {t("Add more photos/videos")}
          </label>
          <input
            type="file"
            className="my"
            id="myfile"
            name="myfile"
            multiple="multiple"
          />
        </div>

        <hr className="mt-4"/>

        <div>
          <label
            htmlFor="username"
            className="text-gray-700 text-sm font-bold mb-2 mt-3 flex items-center justify-between"
          >
            {t("Brief title of the request")}
            <p className="gray-text text-gray-500">{t("Mandatory")}</p>
          </label>
          <input
            className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs "
            id="username"
            type="text"
            placeholder=""
          />
        </div>

        <hr className="mt-4 mb-4"/>

        <div className="">
          <label
            htmlFor="type"
            className="text-gray-700 text-sm font-bold mb-2 flex items-center justify-between"
          >
            {t("Type of appeal")}
            <p className="gray-text text-gray-500">{t("Mandatory")}</p>
          </label>
          <select
            className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs "
            id="type"
          >
            <option className="text-gray-500 ">{t("Choose something")}</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

      <hr className="mt-4 mb-4"/>

        <div>
          <label
            htmlFor="textarea"
            className="text-gray-700 text-sm font-bold mb-2 flex items-center justify-between"
          >
            {t("Description of the request")}
            <p className="gray-text text-gray-500">{t("Mandatory")}</p>
          </label>
          <textarea
            id="textarea"
            className="border rounded-lg w-full h-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="mt-4">
          <label
            htmlFor="adr"
            className="text-gray-700 text-sm font-bold mb-2 flex items-center justify-between"
          >
            {t("Address")}
            <p className="gray-text text-gray-500">{t("Mandatory")}</p>
          </label>
          <input
            className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
            id="adr"
            type="text"
            placeholder={t("Enter address")}
          />
        </div>
        <div className="pb-10">
          <input
            type="submit"
            value={t("Send")}
            className="chous font-medium rounded-lg bg-blue-700 text-white w-full md:w-1/2 flex items-center justify-center"
          />
        </div>
      </form>
    </article>
  );
};

export default Appeal;