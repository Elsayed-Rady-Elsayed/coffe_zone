import { createContext, useContext, useReducer } from "react";
import appReducer, { initialState } from "./appReducre";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        basket: state.basket,
        product: state.products,
        dispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(GlobalContext);
};
