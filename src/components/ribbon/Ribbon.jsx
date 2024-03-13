<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Modal from '../modal/Modal';
=======
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

import Modal from '../modal/Modal';
import gridData from '../ribbon/data/grid-data';
>>>>>>> Stashed changes

function Ribbon() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedMetaText, setSelectedMetaText] = useState("");
<<<<<<< Updated upstream
    const [posts, setPosts] = useState([]);
=======
>>>>>>> Stashed changes

    const openModal = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    const handleMetaTextChange = (e) => {
        setSelectedMetaText(e.target.value);
    };

<<<<<<< Updated upstream
    const { t, i18n } = useTranslation();

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('http://localhost:3000/posts');
            const data = await resp.json();
            setPosts(data.posts.reverse());
        }
        fetchData();
    }, []);

    const filteredData = posts.filter(
=======
    const filteredData = gridData.filter(
>>>>>>> Stashed changes
        (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedMetaText === "" || item.metaText === selectedMetaText)
    );

<<<<<<< Updated upstream
=======
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

>>>>>>> Stashed changes
    return (
        <div className='mt-10 mb-24 pl-4 pr-4'>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={t("Search")}
                    className="border border-gray-300 rounded-md px-4 py-2 w-full mr-2"
                />
                <select
                    value={selectedMetaText}
                    onChange={handleMetaTextChange}
<<<<<<< Updated upstream
                    className="border border-gray-300 rounded-md px-4 py-2 w-30"
=======
                    className="border border-gray-300 rounded-md px-4 py-2 w-50 relative"
>>>>>>> Stashed changes
                >
                    <option value="">{t("All")}</option>
                    <option value="НЕОБРАБОТАННОЕ">{t("Raw")}</option>
                    <option value="В РАБОТЕ">{t("In progress")}</option>
                    <option value="ВЫПОЛНЕНО">{t("In progress")}</option>
                    <option value="НА ПРОВЕРКЕ">{t("Under review")}</option>
                </select>
            </div>
            <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                {filteredData.map((item, index) => (
                    <li
                        key={index}
                        className="card-grid rounded-xl bg-gray-200 p-2"
                        onClick={() => openModal(item)}
                    >
                        <img
                            className="grid-img h-80 w-full object-none rounded-lg"
                            src={item.imageUrl}
                            alt={item.title}
                        />
                        <div className="flex flex-col justify-between pl-3">
                            <div>
                                <p className="metatext-grid pt-4">{item.metaText}</p>
                                <p className="title-grid font-bold">{item.title}</p>
                                <p className="date-grid text-gray-500">{item.date}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
<<<<<<< Updated upstream
            
=======
>>>>>>> Stashed changes
            {selectedItem && (
                <Modal
                    onClose={closeModal}
                    imageUrl={selectedItem.imageUrl}
                    title={selectedItem.title}
                    metaText={selectedItem.metaText}
                    date={selectedItem.date}
                    description={selectedItem.description}
                    type={selectedItem.type}
                    service={selectedItem.service}
                    city={selectedItem.city}
<<<<<<< Updated upstream
                    addr={selectedItem.address}
=======
                    addr={selectedItem.addr}
>>>>>>> Stashed changes
                    who={selectedItem.who}
                />
            )}
        </div>
    );
}

export default Ribbon;
