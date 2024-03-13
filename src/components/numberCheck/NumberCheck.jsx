import React from 'react';

function NubberCheck() {
  return (
    <div className="w-3/4 sm:w-2/3 md:w-1/2 mx-auto my-40">
      <h1 className="text-2xl font-bold my-6">Введите код</h1>
      <p className="text-xl font-semibold my-6 text-balance">Мы отправили код подтверждения на номер +7 999 *** ** **<a href="#" className="ml-4 text-blue-600">Изменить</a></p>
      <input type="text" placeholder="" className="cursor-text w-full h-14 pl-4 border-2 rounded-lg border-gray-300 focus:outline-blue-600 hover:shadow-lg" />
      <p className="text-center text-gray-500 mt-4"><a href="#" className=""> Получить новый код</a></p>
      <p className="text-center text-blue-700 mt-16"><a href="#" className="">Регистрация</a></p>
    </div>
  );
}

export default NubberCheck;
