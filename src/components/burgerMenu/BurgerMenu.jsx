import React, { useState } from "react";
<<<<<<< Updated upstream
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BsThreeDotsVertical } from "react-icons/bs";

// import { FiUser } from 'react-icons/fi';
// import { CiGrid41 } from "react-icons/ci";
// import { GoPlus } from "react-icons/go";
=======
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BsThreeDotsVertical } from "react-icons/bs";
>>>>>>> Stashed changes
import { GoQuestion } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { TbStars } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
<<<<<<< Updated upstream
=======
    const location = useLocation();
    const { t, i18n } = useTranslation();
>>>>>>> Stashed changes

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

<<<<<<< Updated upstream
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
    return (
        
=======
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
>>>>>>> Stashed changes
        <div className="relative lg:hidden md:hidden">
            <button
                className="fixed top-2 left-4 p-2 rounded-md text-white"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    )}
                </svg>
            </button>
            {isOpen && (
                <div className={`fixed top-0 left-0 w-full h-full ${isOpen ? '' : 'hidden'}`}>
                    <div className="bg-black opacity-50 w-full h-full" onClick={toggleMenu}></div>
                    <div className="bg-white w-3/5 h-full shadow-lg absolute top-0 left-0 z-50 transform transition-transform ease-in-out duration-300">
                        <button className="absolute top-4 left-4" onClick={toggleMenu}>
                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
<<<<<<< Updated upstream
                        <ul className="ml-5 mt-14 text-l text-gray-800">
                        <li className="py-3 flex items-center">
                            <GoQuestion size={20} />
                            <Link to="/Questions" className="ml-2 text-sm">{t("Questions")}</Link>
                        </li>

                        <li className="py-3 flex items-center">
                            <IoCartOutline size={20} />
                            <Link to="/Bonuses" className="ml-2 text-sm">{t("Bonuses")}</Link>
                        </li>

                        <li className="py-3 flex items-center">
                            <FaRegStar size={20} />
                            <Link to="/UserRating" className="ml-2 text-sm">{t("User rating")}</Link>
                        </li>

                        <li className="py-3 flex items-center">
                            <TbStars size={20} />
                            <Link to="/ServiceRating" className="ml-2 text-sm">{t("Department rating")}</Link>
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
=======
                        <ul className="ml-2 mr-2 mt-14 text-l text-gray-800">
                            <li className={`p-2 pb-3 pt-3 rounded-lg flex items-center ${location.pathname === '/Questions' ? 'bg-blue-100 text-blue-800' : ''}`}>
                                <GoQuestion size={20} />
                                <Link to="/Questions" className="ml-2 text-sm">{t("Questions")}</Link>
                            </li>

                            <li className={`p-2 pb-3 pt-3 rounded-lg flex items-center ${location.pathname === '/Bonuses' ? 'bg-blue-100 text-blue-800' : ''}`}>
                                <IoCartOutline size={20} />
                                <Link to="/Bonuses" className="ml-2 text-sm">{t("Bonuses")}</Link>
                            </li>

                            <li className={`p-2 pb-3 pt-3 rounded-lg flex items-center ${location.pathname === '/UserRating' ? 'bg-blue-100 text-blue-800' : ''}`}>
                                <FaRegStar size={20} />
                                <Link to="/UserRating" className="ml-2 text-sm">{t("User rating")}</Link>
                            </li>

                            <li className={`p-2 pb-3 pt-3 rounded-lg flex items-center ${location.pathname === '/ServiceRating' ? 'bg-blue-100 text-blue-800' : ''}`}>
                                <TbStars size={20} />
                                <Link to="/ServiceRating" className="ml-2 text-sm">{t("Department rating")}</Link>
                            </li>

                            <li className={`p-2 pb-3 pt-3 rounded-lg flex items-center ${location.pathname === '/Prevention' ? 'bg-blue-100 text-blue-800' : ''}`}>
                                <FaRegFlag size={20} />
                                <Link to="#" className="ml-2 text-sm">{t("Prevention")}</Link>
                            </li>

                            <li className={`p-2 pb-3 pt-3 rounded-lg flex items-center ${location.pathname === '/Support' ? 'bg-blue-100 text-blue-800' : ''}`}>
                                <CgDanger size={20} />
                                <Link to="/Support" className="ml-2 text-sm">{t("Those. support")}</Link>
                            </li>

                            <li className={`p-2 pb-3 pt-3 rounded-lg flex items-center ${location.pathname === '/Wish' ? 'bg-blue-100 text-blue-800' : ''}`}>
                                <IoPhonePortraitOutline size={20} />
                                <Link to="/Wish" className="ml-2 text-sm">{t("Wish")}</Link>
                            </li>

                            <li className={`p-2 pb-3 pt-3 rounded-lg flex items-center ${location.pathname === '/Settings' ? 'bg-blue-100 text-blue-800' : ''}`}>
                                <CiSettings size={20} />
                                <Link to="#" className="ml-2 text-sm">{t("Settings")}</Link>
                            </li>
>>>>>>> Stashed changes
                        </ul>
                        <div className="profile-menu flex items-center justify-between absolute bottom-0 left-0 w-full p-4 text-gray-800 cursor-pointer z-50">
                            <div className="flex">
                                <img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/glide/image/fetch/t_media_lib_thumb/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FSfnAmbnmWBhBzvJgruvI%2Fpub%2FeEgFm5BlIaUy1JPmrlqp.jpg" alt="" />
                                <p className="flex items-center pl-2">Кирилл</p>
                            </div>
                            <div className="flex items-center">
<<<<<<< Updated upstream
                                
=======
>>>>>>> Stashed changes
                                <button onClick={toggleModal}>
                                    <BsThreeDotsVertical />
                                </button>
                            </div>
                        </div>
                        {isModalOpen && (
                            <div className="fixed left-5 bottom-16 rounded-lg border-2 bg-opacity-50 flex justify-center items-center">
                                <div className="modal-content bg-white p-3 rounded-lg">
                                    <p>{t("View profile")}</p>
                                    <p>{t("Exit")}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
