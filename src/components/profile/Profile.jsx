import React from 'react';
import { useTranslation } from "react-i18next";
import "./Profile.css"

import icon1 from "../../app/img/1.jpg"
import icon2 from "../../app/img/m.jpg"
import icon3 from "../../app/img/p.png"

import BurgerMenu from "../burgerMenu/BurgerMenu";

const Profile = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
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

                <button className="font-bold text-white bg-blue-700 hover:bg-blue-800 py-2 px-auto rounded-lg flex items-center justify-center mx-auto my-5 w-full">
                    <img className="pr-2 w-auto" src={icon3} alt="" />
                    {t("Edit")}
                </button>


                <h1 className="text-xl mb-3 font-bold">{t("Your requests")}</h1>
                <section className="leading-tight grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    <div className="mb-6">
                        <ul className="posts">
                            <li>
                                <img className="rounded-2xl max-w-sm" src={icon2} alt="" width="auto" height="auto" />
                            </li>
                            <li className="text-sm text-blue-700 mt-2 ml-2 font-bold">ВЫПОЛНЕНО</li>
                            <li className="text-sm ml-2 font-bold">Незаконная утилизация мусора</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="posts">
                            <li>
                                <img className="rounded-2xl max-w-sm" src={icon2} alt="" width="auto" height="auto" />
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

export default Profile;