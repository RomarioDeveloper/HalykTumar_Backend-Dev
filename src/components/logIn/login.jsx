import React from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";

import imagePlus from "../../app/img/imagePlus.png";

const Login = () => {
    return (
        <article className="w-full pt-14 pb-20">
            <nav className="fixed top-0 left-0 w-full lg:hidden md:hidden flex justify-center items-center z-50">
                <h1 className="text-xl font-bold text-white">Давай познакомимся</h1>
                <BurgerMenu />
            </nav>
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
                    <input type="submit" value="Далее" className="chous font-medium rounded-lg bg-blue-700 text-white w-full md:w-1/2 flex items-center justify-center" />
                </div>
                <p className="text-center text-blue-700 mt-2 pb-10"><a href="#" className="">Войти</a></p>
            </form>
        </article>
    );
}

export default Login;
