import React, { useRef, useEffect } from "react";

function Modal({
    onClose,
    imageUrl,
    title,
    metaText,
    description,
    date,
    type,
    service,
    city,
    addr,
    who,
}) {
    const modalRef = useRef();

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const ListItem = ({ label, value }) => (
        <>
            <li className="grid grid-cols-2 md:grid-cols-2 md:inline-block lg:inline-block mb-2">
                <p className="text-gray-500 text-md lg:text-lg">{label}</p>
                <p className="text-md lg:text-lg">{value}</p>
            </li>
            <hr className="mt-2 mb-2 md:hidden lg:hidden" />
        </>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center outline-none focus:outline-none ">
            <div className="fixed inset-0 bg-black opacity-25"></div>
            <div className="relative mx-auto my-6 h-90%" ref={modalRef}>
                <div className="modal border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between rounded-t">
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={onClose}
                        >
                            <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 p-4">
                        <div className="h-auto rounded-lg">
                            <img
                                src={imageUrl}
                                alt={title}
                                className="grid-img h-80 w-full object-none rounded-lg"
                            />
                        </div>
                        <div className="h-auto rounded-lg lg:col-span-2 overflow-y-auto max-h-90%">
                            <p className="metatext-grid mb-2">{metaText}</p>
                            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                            <span className="text-lg font-bold mb-2">Описание</span>
                            <p className="text-gray-500 mb-3 text-base">{description}</p>
                            <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                <ListItem label="Тип обращения" value={type} />
                                <ListItem label="Дата публикации" value={date} />
                                <ListItem label="Город (район)" value={city} />
                                <ListItem label="Адрес" value={addr} />
                                <ListItem label="Ответственная служба" value={service} />
                            </ul>
                        </div>
                    </div>
                    <div className="flex b-border-1 pb-2 left-0 w-full p-4 text-gray-800 cursor-pointer z-50">
                        <img
                            className="w-10 h-10 rounded-full object-cover"
                            src="https://res.cloudinary.com/glide/image/fetch/t_media_lib_thumb/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FSfnAmbnmWBhBzvJgruvI%2Fpub%2FeEgFm5BlIaUy1JPmrlqp.jpg"
                            alt=""
                        />
                        <div className="ml-3 flex items-center text-black">
                            <p>{who}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
