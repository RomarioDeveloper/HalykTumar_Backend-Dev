import React from "react";
import BurgerMenu from "../burgerMenu/BurgerMenu";

import imagePlus from "../../app/img/imagePlus.png";

const SingIn = () => {
    return (
        <article className="w-full pt-14 pb-20">
            <nav className="fixed top-0 left-0 w-full lg:hidden md:hidden flex justify-center items-center z-50">
                <h1 className="text-xl font-bold text-white">Добро пожаловать</h1>
                <BurgerMenu />
            </nav>
            <form className="formAdd">
                <div className="">
                    <label htmlFor="phoneNumber" className="text-gray-700 text-sm font-bold mb-2 mt-3 flex items-center justify-between">
                        Телефон
                        <span className="gray-text text-gray-500">Обязательное</span>
                    </label>
                    <input className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs" id="phoneNumber" type="tel" placeholder="" />
                </div>

                <div className="">
                    <input type="submit" value="Далее" className="chous font-medium rounded-lg bg-blue-700 text-white w-full md:w-1/2 flex items-center justify-center" />
                </div>
                <p className="text-center text-blue-700 mt-2 pb-10"><a href="#" className="">Регистрация</a></p>
            </form>
        </article>
    );
}

export default SingIn;
