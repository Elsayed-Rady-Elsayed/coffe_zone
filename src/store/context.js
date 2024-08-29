import { createContext, useContext, useReducer } from "react";
import appReducer, { initialState } from "./appReducre";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        singleProduct: state.singleProduct,
        basket: state.basket,
        product: state.products,
        dispatch: dispatch,
        category: state.category,
        user: state.user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(GlobalContext);
};
