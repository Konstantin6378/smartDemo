import { createContext, useContext } from 'react';

export type IsViewType = {
  isView: boolean;
  setIsView: (f: boolean) => void;
};
export const MyGlobalContext = createContext<IsViewType>({
  isView: false,
  setIsView: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
