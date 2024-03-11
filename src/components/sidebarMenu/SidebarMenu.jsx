import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FiUser } from 'react-icons/fi';
import { CiGrid41 } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { GoQuestion } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { TbStars } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
    return (
        <nav className="sidebar fixed top-0 left-0 h-full">
            <ul className="py-8 text-white ml-4 mr-4">
                <li className="py-3 flex items-center">
                    <CiGrid41 size={20} />
                    <Link to="/" className="ml-2 text-sm">{t("Ribbon")}</Link>
                </li>

                <li className="py-3 flex items-center">
                    <GoPlus size={20} />
                    <Link to="#" className="ml-2 text-sm">{t("Add a request")}</Link>
                </li>

                <li className="py-3 flex items-center">
                    <FiUser size={20} />
                    <Link to="#" className="ml-2 text-sm">{t("Profile")}</Link>
                </li>

                <li className="py-3 flex items-center">
                    <GoQuestion size={20} />
                    <Link to="/Questions" className="ml-2 text-sm">{t("Questions")}</Link>
                </li>

                <li className="py-3 flex items-center">
                    <IoCartOutline size={20} />
                    <Link to="/Bonuses" className="ml-2 text-sm">{t("Bonuses")}</Link>
                </li>

                <li className="py-3 flex items-center">
                    <TbStars size={20} />
                    <Link to="/ServiceRating" className="ml-2 text-sm">{t("Department rating")}</Link>
                </li>

                <li className="py-3 flex items-center">
                    <FaRegStar size={20} />
                    <Link to="/UserRating" className="ml-2 text-sm">{t("User rating")}</Link>
                </li>

                <li className="py-3 flex items-center">
                    <FaRegFlag size={20} />
                    <Link to="#" className="ml-2 text-sm">{t("Prevention")}</Link>
                </li>

                <li className="py-3 flex items-center">
                    <CgDanger size={20} />
                    <Link to="/Support" className="ml-2 text-sm">{t("Those. support")}</Link>
                </li>

                <li className="py-3 flex items-center">
                    <IoPhonePortraitOutline size={20} />
                    <Link to="/Wish" className="ml-2 text-sm">{t("Wish")}</Link>
                </li>

                <li className="py-3 flex items-center">
                    <CiSettings size={20} />
                    <Link to="#" className="ml-2 text-sm">{t("Settings")}</Link>
                </li>

                <button className='text-white	bg-slate-600 p-2.5 rounded-lg ml-5' onClick={() => changeLanguage("kz")}>KZ</button>
                <button className='text-white	bg-slate-600 p-2.5 rounded-lg' onClick={() => changeLanguage("ru")}>RU</button>

            </ul>
            <div onClick={toggleModal} className="profile-menu flex absolute bottom-0 left-0 w-full p-4 text-white cursor-pointer z-50">
                <div className="flex">
                    <img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/glide/image/fetch/t_media_lib_thumb/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FSfnAmbnmWBhBzvJgruvI%2Fpub%2FeEgFm5BlIaUy1JPmrlqp.jpg" alt="" />
                    <p className="flex items-center pl-2">Кирилл</p>
                </div>
            </div>
            {/* Модальное окно */}
            {isModalOpen && (
                <div className="fixed left-16 bottom-16 rounded-lg border-2 bg-opacity-50 flex justify-center items-center">
                    <div className="modal-content bg-white p-3 rounded-lg">
                        <p>{t("View profile")}</p>
                        <p>{t("Exit")}</p>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Sidebar;
