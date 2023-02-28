import { createContext } from "react";

const CicleContext = createContext({});

export function CicleContextProvider({ children }) {
  const contextValue = {
    // defina aqui as propriedades e métodos do contexto
  };

  return (
    <CicleContext.Provider value={contextValue}>
      {children}
    </CicleContext.Provider>
  );
}

export default CicleContext;