import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import Ribbon from './components/ribbon/Ribbon';
import BurgerMenu from "./components/burgerMenu/BurgerMenu";
import BottomMenu from "./components/bottomMenu/BottomMenu";
import Sidebar from "./components/sidebarMenu/SidebarMenu";
import Appeal from './components/appeal/Appeal';
import Profile from "./components/profile/Profile";
import Support from './components/support/Support';
import ServiceRating from './components/serviceRating/ServiceRating';
import UserRating from "./components/userRating/UserRating";
import Wish from "./components/wish/Wish";
import Questions from "./components/questions/Questions";
import Bonuses from "./components/bonuses/Bonuses";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  return (
    <>   
      <nav className="fixed top-0 left-0 w-full lg:hidden md:hidden flex justify-center items-center z-50">
          <h1 className="text-xl font-bold text-white">{t("Ribbon")}</h1>
            <button className='text-white	bg-slate-600 p-2.5 rounded-lg ml-5' onClick={() => changeLanguage("kz")}>KZ</button>
            <button className='text-white	bg-slate-600 p-2.5 rounded-lg' onClick={() => changeLanguage("ru")}>RU</button>
            <BurgerMenu />
      </nav>
      
      <div className="lg:flex md:flex">
        <section className="sidebar">
          <Sidebar />
        </section>
        
        <main className="grid-section pt-8 md:pt-0 lg:flex-grow">
          <Routes>
            <Route path="/" element={<Ribbon />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Appeal" element={<Appeal />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/ServiceRating" element={<ServiceRating />} />
            <Route path="/UserRating" element={<UserRating />} />
            <Route path="/Wish" element={<Wish />} />
            <Route path="/Questions" element={<Questions />} />
            <Route path="/Bonuses" element={<Bonuses />} />
          </Routes>
        </main>
      </div>

      <div className="bottom-nav lg:hidden md:hidden z-10">
        <BottomMenu />
      </div>
    </>
  );
}

export default App;