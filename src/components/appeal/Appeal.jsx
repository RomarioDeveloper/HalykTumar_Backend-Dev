import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BurgerMenu from "../burgerMenu/BurgerMenu";

import imagePlus from "../../app/img/imagePlus.png";
import Plus from "../../app/img/plus.png"

import "./Appeal.css";

const Appeal = () => {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    title: "",
    appeal: "",
    description: "",
    date: "",
    status: "",
    address: "",
    place: "",
    image: null
  });

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  const today = new Date();

// Получение дня, месяца и года
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Считается с 0, поэтому добавляем 1
  const year = today.getFullYear();

// Формирование строки даты в формате 'гггг-мм-дд'
  const formattedDate = `${year}-${month}-${day}`;

  // Функция добавления поста
  async function createPost(title, appeal, description, date, status, address, place) {
    try {
      const resp = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: 1,
          user_id: 1,
          department_id: 1,
          title: title,
          appeal: appeal,
          place: place,
          description: description,
          date: formattedDate,
          status: 'status',
          address: address
        })
      });
      const data = await resp.json();
      console.log(data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  // createPost('ЗАГОЛОВОК', 'ТИП', 'ОПИСАНИЕ', '2024-03-03', 'В РАБОТЕ', 'АДРЕС', 'МЕСТО')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, appeal, description, date, status, address, place } = formData;
    // Вызов функции createPost с значениями из формы
    await createPost(title, appeal, description, date, status, address, place);

    setFormData({
      title: "",
      appeal: "",
      description: "",
      date: "",
      status: "",
      address: "",
      place: ""
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0] // Обновляем изображение в состоянии формы
    });
  };


  return (
    <article className="w-full pt-10 pb-20">
      <nav className="fixed top-0 left-0 w-full lg:hidden md:hidden flex justify-center items-center z-50">
        <h1 className="text-xl font-bold text-white">{t("Add a request")}</h1>
        <button className='text-white	bg-slate-600 p-2.5 ml-5' onClick={() => changeLanguage("kz")}>KZ</button>
          <button className='text-white	bg-slate-600 p-2.5' onClick={() => changeLanguage("ru")}>RU</button>
        <BurgerMenu />
      </nav>
      <form className="formAdd" onSubmit={handleSubmit}>
        <div>
          <label className="text-gray-700 text-sm font-bold mb-1 mt-5 flex items-center justify-between">
              {t("Appeal image")}
            <p className="gray-text text-gray-500">{t("Mandatory")}</p>
          </label>
          <label htmlFor="okn" className="border rounded-lg w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline flex items-center mb-6 text-xs">
            <img className="pr-2" src={imagePlus} alt="Select" />
            {t("Select an image...")}
          </label>
          {/* input для изображение */}
          <input type="file" className="my" id="okn" name="image" onChange={handleImageChange} />
          <label htmlFor="myfile" className="chous font-medium rounded-lg bg-blue-700 text-white w-full md:w-1/2 flex items-center justify-center">
            <img className="mr-2" src={Plus} alt="Add" />
            {t("Add more photos/videos")}
          </label>
          {/* input для еще изображений */}
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
          {/* input для тайтла */}
          <input
            className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs "
            id="username"
            type="text"
            name="title"
            placeholder=""
            value={formData.title}
            onChange={handleChange}
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
          {/* select для типа */}
          <select
            className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs "
            id="type"
            name="appeal"
            value={formData.appeal}
            onChange={handleChange}
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
          {/* textarea для описания */}
          <textarea
            id="textarea"
            className="border rounded-lg w-full h-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            value={formData.description}
            onChange={handleChange}
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
          {/* input для адреса */}
          <input
            className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
            id="adr"
            type="text"
            value={formData.address}
            name="address"
            onChange={handleChange}
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