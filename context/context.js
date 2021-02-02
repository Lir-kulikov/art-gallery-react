import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export function AppWrapper({ children }) {

  //--------------
  // модальные окна
  //---------------

  // Видео
  
  const [modalVideo, setModalVideo] = useState(false);

  const openModalVideo = () => {
    setModalVideo(true);
  };

  const closeModalVideo = () => {
    setModalVideo(false);
  };

  // Авторизация

  const [modalAutorize, setModalAutorize] = useState(false);

  const openModalAutorize = () => {
    setModalAutorize(true);
    setModalRes(false);
    setModalReg(false);
  };

  const closeModalAutorize = () => {
    setModalAutorize(false);
  };

  // Регистрация

  const [modalReg, setModalReg] = useState(false);

  const openModalReg = () => {
    setModalReg(true);
    setModalAutorize(false);
    setModalRes(false);
  };

  const closeModalReg = () => {
    setModalReg(false);
  };

  // Сброс пароля

  const [modalRes, setModalRes] = useState(false);

  const openModalRes = () => {
    setModalRes(true);
    setModalAutorize(false);
    setModalReg(false);
  };

  const closeModalRes = () => {
    setModalRes(false);
  };

  // Успешно

  const [modalSuccess, setModalSuccess] = useState(false);

  const openModalSuccess = () => {
    setModalRes(false);
    setModalSuccess(true);
  };

  const closeModalSuccess = () => {
    setModalSuccess(false);
  };

  return (
    <AppContext.Provider value={{
      openModalVideo,
      closeModalVideo,
      modalVideo
    }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}