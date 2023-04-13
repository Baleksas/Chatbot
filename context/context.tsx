import { createContext, useContext, useReducer, useState } from "react";

const AppContext = createContext(null as any);

export const InitialState = { nickname: "Anonymous 🎭", storyMode: false };

export function Provider({ children }: any) {
  const [nickname, setNickname] = useState(InitialState.nickname);
  const [storyMode, setStoryMode] = useState(InitialState.storyMode);

  const changeNickname = (newNickname: string) => {
    setNickname(newNickname);
  };

  const changeStoryMode = () => {
    setNickname(InitialState.nickname);
    setStoryMode((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={[
        [nickname, changeNickname],
        [storyMode, changeStoryMode],
      ]}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
