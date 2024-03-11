import React from "react";
import { useTranslation } from "react-i18next";
import "./Bonuses.css"

import BurgerMenu from "../burgerMenu/BurgerMenu";


const Shop = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
    return (
        <section>
            <nav className="fixed top-0 left-0 w-full lg:hidden md:hidden flex justify-center items-center z-50">
                <h1 className="text-xl font-bold text-white">{t("Bonuses")}</h1>
                <button className='text-white bg-slate-600 p-2.5 rounded-lg ml-5' onClick={() => changeLanguage("kz")}>KZ</button>
                <button className='text-white bg-slate-600 p-2.5 rounded-lg' onClick={() => changeLanguage("ru")}>RU</button>
                <BurgerMenu />
            </nav>
            <main className="w-11/12 pt-14 m-auto">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4">
                    <li className="grow border-solid border-2 border-gray-200 p-2 rounded-lg mb-2">
                        <span className="flex justify-center">
                            <img src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fcdn-b.printut.com%2Fupload%2Ftemplates%2Fmockups%2F2023%2F6%2F085112c2%2F14%2FiIa9kXf9qN.jpg" className="shop-img rounded-lg h-50 " alt="2" />
                        </span>
                        <p className="mt-2 font-semibold">12 000 {t("points")}</p>
                        <p className="text-gray-400">{t("Certificate from photographic")}</p>
                    </li>

                    <li className="grow border-solid border-2 border-gray-200 p-2 rounded-lg mb-2">
                        <span className="flex justify-center">
                            <img src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fcdn-b.printut.com%2Fupload%2Ftemplates%2Fmockups%2F2023%2F6%2F085112c2%2F15%2FWrMv1B9F8s.jpg" className="shop-img rounded-lg h-50 " alt="3" />
                        </span>
                        <p className="mt-2 font-semibold">20 000 {t("points")}</p>
                        <p className="text-gray-400">{t("Digital Marketing Certificate")}</p>
                    </li>

                    <li className="grow border-solid border-2 border-gray-200 p-2 rounded-lg mb-2">
                        <span className="flex justify-center">
                            <img src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fcdn-b.printut.com%2Fupload%2Ftemplates%2Fmockups%2F2023%2F8%2F2390a05b%2F6%2Fr08mn4Rrqm.jpg" className="shop-img rounded-lg h-50 " alt="4" />
                        </span>
                        <p className="mt-2 font-semibold">18 000 {t("points")}</p>
                        <p className="text-gray-400">{t("American Red Cross Certificate")}</p>
                    </li>

                    <li className="grow border-solid border-2 border-gray-200 p-2 rounded-lg mb-2">
                        <span className="flex justify-center">
                            <img src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fwww.eskulap-beauty.ru%2Fupload%2Fiblock%2Fcd3%2Fcd371ca403439647745b376882705c21.jpg" className="shop-img rounded-lg h-50 " alt="5" />
                        </span>
                        <p className="mt-2 font-semibold">15 000 {t("points")}</p>
                        <p className="text-gray-400">{t("Microsoft Certificate")}</p>
                    </li>
                    <li className="grow border-solid border-2 border-gray-200 p-2 rounded-lg mb-2">
                        <span className="flex justify-center">
                            <img src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fjeweller-karat.ru%2Fupload%2Fiblock%2F56b%2F56b0a0cbae49529395371d6830814fb9.png" className="shop-img rounded-lg h-50 " alt="6" />
                        </span>
                        <p className="mt-2 font-semibold">10 000 {t("points")}</p>
                        <p className="text-gray-400">{t("Discount on language courses")}</p>
                    </li>
                    <li className="grow border-solid border-2 border-gray-200 p-2 rounded-lg mb-2">
                        <span className="flex justify-center">
                            <img src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fdekoshop.kz%2Fwa-data%2Fpublic%2Fshop%2Fproducts%2F92%2F43%2F4392%2Fimages%2F35625%2F35625.970.JPG" className="shop-img rounded-lg h-50 " alt="7" />
                        </span>
                        <p className="mt-2 font-semibold">30 000 {t("points")}</p>
                        <p className="text-gray-400">{t("Certificate for 10,000 tenge")}</p>
                    </li>
                </ul>
            </main>
        </section>
            

    );
}

export default Shop;
