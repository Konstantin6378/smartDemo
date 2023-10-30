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

export type NumberPhone = {
  numberPhone: string;
  setNumberPhone: (prev: string) => void;
  isCheck: boolean;
  setIsCheck: (a: boolean) => void;
  isCheckSubmit: boolean;
  setIsCheckSubmit: (s: boolean) => void;
};
export const FormContext = createContext<NumberPhone>({
  numberPhone: '',
  setNumberPhone: () => {},
  isCheck: false,
  setIsCheck: () => {},
  isCheckSubmit: false,
  setIsCheckSubmit: () => {},
});

export const useContextForm = () => useContext(FormContext);
