import { createContext, useContext, useState } from "react";

interface GlobalContextType {
  avatar: string;
  updateAvatar: (newAvatar: string) => void;
  nickname: string;
  updateNickname: (newNickname: string) => void;
  // 在这里添加其他全局变量的类型和相应的更新函数
}

const initialGlobalState: GlobalContextType = {
  avatar: '',
  updateAvatar: () => {},
  nickname: '',
  updateNickname: () => {},
  // 在这里添加其他全局变量的初始值
};

const GlobalContext = createContext<GlobalContextType>(initialGlobalState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [avatar, setAvatar] = useState(initialGlobalState.avatar);
  const [nickname, setNickname] = useState(initialGlobalState.nickname);
  // 在这里添加其他全局变量的状态和更新函数

  const updateAvatar = (newAvatar: string) => {
    setAvatar(newAvatar);
  };

  const updateNickname = (newNickname: string) => {
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
