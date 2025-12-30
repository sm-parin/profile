import React, { createContext, useContext, ReactNode } from "react";

interface AppContextType {
  data: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode; data: any }> = ({
  children,
  data,
}) => {
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
