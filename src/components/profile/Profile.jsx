<<<<<<< Updated upstream
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> Stashed changes
import { useTranslation } from "react-i18next";
import "./Profile.css"

import icon1 from "../../app/img/1.jpg"
import icon2 from "../../app/img/m.jpg"
import icon3 from "../../app/img/p.png"
<<<<<<< Updated upstream
=======
import imagePlus from "../../app/img/imagePlus.png";
>>>>>>> Stashed changes

import BurgerMenu from "../burgerMenu/BurgerMenu";

const Profile = () => {
    const { t, i18n } = useTranslation();
<<<<<<< Updated upstream
=======
    const [isModalOpen, setIsModalOpen] = useState(false);
>>>>>>> Stashed changes

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
<<<<<<< Updated upstream
=======

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

>>>>>>> Stashed changes
    return (
        <div className="pb-24">
            <nav className="fixed top-0 left-0 w-full lg:hidden md:hidden flex justify-center items-center z-50">
                <h1 className="text-xl font-bold text-white">{t("Profile")}</h1>
                <button className='text-white	bg-slate-600 p-2.5 rounded-lg ml-5' onClick={() => changeLanguage("kz")}>KZ</button>
                <button className='text-white	bg-slate-600 p-2.5 rounded-lg' onClick={() => changeLanguage("ru")}>RU</button>
                <BurgerMenu />
            </nav>

            <main id="main" className="m-0 mx-5">
                <section className="flex flex-col items-center mx-auto mb-3">
                    <img className="w-28 h-28 rounded-full border-solid border-4 border-indigo-200 mt-8 mb-4" src={icon1} alt=""
                        width="400" height="400" />
                        <h1 className="text-2xl font-bold">Серик</h1>
                        <p className="text-mx text-gray-500">300 {t("points")}</p>
                </section>

                <h1 className="text-xl mb-4 font-bold">{t("Your data")}</h1>

                <article id="nom" className="flex justify-between">
                    <section className="phone mb-2">
                        <p className="text-slate-500">{t("Phone number")}</p>
                        <p>87472494860</p>
                    </section>

                    <section className="place">
                        <p className="text-slate-500">{t("City/district")}</p>
                        <p>Г.Павлодар</p>
                    </section>
                </article>

<<<<<<< Updated upstream
                <button className="font-bold text-white bg-blue-700 hover:bg-blue-800 py-2 px-auto rounded-lg flex items-center justify-center mx-auto my-5 w-full">
=======
                <button className="font-bold text-white bg-blue-700 hover:bg-blue-800 py-2 px-auto rounded-lg flex items-center justify-center mx-auto my-5 w-full" onClick={openModal}>
>>>>>>> Stashed changes
                    <img className="pr-2 w-auto" src={icon3} alt="" />
                    {t("Edit")}
                </button>

<<<<<<< Updated upstream
=======
                {isModalOpen && (
                    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center md:flex md:justify-end lg:flex lg:justify-end modal-edit-profile-phone sm:bg-black sm:bg-opacity-50">
                        <div className="bg-white overflow-y-auto modal-edit-profile sm:modal-edit-profile-phone rounded-lg lg:p-8 md:p-8 sm:p-8">
                            {/* <button className="text-red-500" onClick={closeModal}>Close</button> */}
                            <section className="flex flex-col items-center mx-auto mb-3">
                                <img className="w-28 h-28 rounded-full border-solid border-4 border-indigo-200 mt-8 mb-4" src={icon1} alt=""
                                    width="400" height="400" />
                                    <h1 className="text-2xl font-bold">Серик</h1>
                                    <p className="text-mx text-gray-500">300 {t("points")}</p>
                            </section>
                            <form className="formAdd">
                                <div>
                                    <label htmlFor="profilePhoto" className="text-gray-700 text-sm font-bold mb-1 mt-5 flex items-center justify-between">
                                        Фото профиля
                                        <span className="gray-text text-gray-500">Обязательное</span>
                                    </label>
                                    <label htmlFor="profilePhoto" className="border rounded-lg w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline flex items-center mb-6 text-xs">
                                        <img className="pr-2" src={imagePlus} alt="Выберите изображение профиля" />
                                        Выберите изображение...
                                    </label>
                                    <input type="file" id="profilePhoto" className="hidden" />
                                </div>

                                <hr className="mt-4"/>

                                <div className="">
                                    <label htmlFor="username" className="text-gray-700 text-sm font-bold mb-2 mt-3 flex items-center justify-between">
                                        Имя
                                        <span className="gray-text text-gray-500">Обязательное</span>
                                    </label>
                                    <input className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs" id="username" type="text" placeholder="" />
                                </div>

                                <hr className="mt-4 mb-4"/>

                                <div className="">
                                    <label htmlFor="phoneNumber" className="text-gray-700 text-sm font-bold mb-2 mt-3 flex items-center justify-between">
                                        Телефон
                                        <span className="gray-text text-gray-500">Обязательное</span>
                                    </label>
                                    <input className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs" id="phoneNumber" type="tel" placeholder="" />
                                </div>

                                <hr className="mt-4 mb-4"/>

                                <div className="">
                                    <label htmlFor="city" className="text-gray-700 text-sm font-bold mb-2 flex items-center justify-between">
                                        Город / район
                                        <span className="gray-text text-gray-500">Обязательное</span>
                                    </label>
                                    <select className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs" id="city">
                                        <option className="text-gray-500">Выберите что-нибудь</option>
                                        <option>Г. Павлодар</option>
                                        <option>Г. Аксу</option>
                                    </select>
                                </div>

                                <div className="pb-2">
                                    <input type="submit" value="Применить" className="chous font-medium rounded-lg bg-blue-700 text-white w-full md:w-1/2 flex items-center justify-center" />
                                </div>
                            </form>
                        </div>
                    </div>
                )}
>>>>>>> Stashed changes

                <h1 className="text-xl mb-3 font-bold">{t("Your requests")}</h1>
                <section className="leading-tight grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    <div className="mb-6">
                        <ul className="posts">
                            <li>
<<<<<<< Updated upstream
                                <img className="rounded-2xl max-w-sm" src={icon2} alt="" width="auto" height="auto" />
=======
                                <img className="rounded-2xl" src={icon2} alt="" width="auto" height="auto" />
>>>>>>> Stashed changes
                            </li>
                            <li className="text-sm text-blue-700 mt-2 ml-2 font-bold">ВЫПОЛНЕНО</li>
                            <li className="text-sm ml-2 font-bold">Незаконная утилизация мусора</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="posts">
                            <li>
<<<<<<< Updated upstream
                                <img className="rounded-2xl max-w-sm" src={icon2} alt="" width="auto" height="auto" />
=======
                                <img className="rounded-2xl" src={icon2} alt="" width="auto" height="auto" />
>>>>>>> Stashed changes
                            </li>
                            <li className="text-sm text-blue-700 mt-2 ml-2 font-bold">ВЫПОЛНЕНО</li>
                            <li className="text-sm ml-2 font-bold">Незаконная утилизация мусора</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}

<<<<<<< Updated upstream
export default Profile;
=======
export default Profile;
>>>>>>> Stashed changes
