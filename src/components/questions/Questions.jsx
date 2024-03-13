import React, { useState } from 'react';
import arrowSvg from '../../app/img/arrow_icon.svg';

export default function ItemCollection() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [videoTitle, setVideoTitle] = useState('');

    const data = [
        { name: '1. Как пройти регистрацию в Halyk Tumar', link: 'https://www.youtube.com/embed/nhr9REG1MVQ' },
        { name: '2. Как заполнить и изменить профиль', link: 'https://www.youtube.com/embed/WEQv6nAfyU8' },
        { name: '3. Как изменить и редактировать профиль', link: 'https://www.youtube.com/embed/PnUH4iFyZaM' },
        { name: '4. Как установить приложение Halyk Tumar', link: 'https://www.youtube.com/embed/YjlLurjBOXc' },
        { name: '5. Как установить приложение на iOS', link: 'https://www.youtube.com/embed/5M3RwBO2WmM' },
        { name: '6. Как добавить обращение в ленту', link: 'https://www.youtube.com/embed/yJ4_seR1Y0Q' },
        { name: '7. Как редактировать или удалять обращения', link: 'https://www.youtube.com/embed/auL8AwupWek' },
        { name: '8. Профилактика и как перейти в чат бот Telegram', link: 'https://www.youtube.com/embed/sLhT7e6QF_c' },
        { name: '9. Как рассматривать обращения', link: 'https://www.youtube.com/embed/UqunIJPTi5E' },
        { name: '10. Как выбирать другой отдел', link: 'https://www.youtube.com/embed/ET2vHkV3i24' },
    ];

    const openModal = (videoUrl, videoTitle) => {
        setModalIsOpen(true);
        setVideoUrl(videoUrl);
        setVideoTitle(videoTitle);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
<<<<<<< Updated upstream
            <section className='w-full h-20 bg-blue-600'></section>
            <section className="container mx-auto p-5">
=======
            <section className="mx-auto pl-5 pr-5 pt-10">
>>>>>>> Stashed changes
                {data.map((item, index) => (
                    <div key={index} className="hover:bg-gray-200 rounded-lg my-2 p-2">
                        <button className='flex justify-between w-full' onClick={() => openModal(item.link, item.name)}>
                            <span className="cursor-pointer text-blue-600 text-sm md:text-md lg:text-lg">{item.name}</span>
                            <img src={arrowSvg} alt="arrow icon" />
                        </button>
                        <hr />
                    </div>
                ))}
                {modalIsOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white sm:bg-black sm:bg-opacity-50 z-50">
                        <div className="bg-white rounded-lg xl:w-1/3 lg:w-2/4 md:w-1/2 sm:w-1/2 w-full m-5 p-5 text-sm md:text-md lg:text-lg relative">
                            <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className='p-5'>
                                <h2 className='py-2 text-lg font-bold'>{videoTitle}</h2>
                                <iframe
                                    title="YouTube Video"
                                    src={videoUrl}
<<<<<<< Updated upstream
                                    className='aspect-square w-full h-72'
=======
                                    className='aspect-square w-full h-96'
>>>>>>> Stashed changes
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}
