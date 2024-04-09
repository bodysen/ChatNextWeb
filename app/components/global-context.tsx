import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [avatar, setAvatar] = useState('');
  const [nickname, setNickname] = useState('');
  // 在这里添加其他全局变量的状态和更新函数

  const updateAvatar = (newAvatar) => {
    setAvatar(newAvatar);
  };

  const updateNickname = (newNickname) => {
    setNickname(newNickname);
  };

  // 在这里添加其他更新函数

  return (
    <GlobalContext.Provider value={{ avatar, updateAvatar, nickname, updateNickname }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
