import { createContext, useContext, useReducer, useState } from "react";

const AppContext = createContext(null as any);

export function Provider({ children }: any) {
  const [nickname, setNickname] = useState("Anonymous 🎭");

  const changeNickname = (newNickname: string) => {
    setNickname(newNickname);
  };

  return (
    <AppContext.Provider value={[nickname, changeNickname]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
