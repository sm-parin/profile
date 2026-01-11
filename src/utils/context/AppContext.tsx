import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { recursivelySetData } from "../functions/helper";

interface AppContextType {
  response: any;
  data: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode; response: any }> = ({
  children,
  response,
}) => {
  const location = useLocation();

  const [data, setData] = React.useState<any>(null);

  useEffect(() => {
    let pathname = location.pathname === "/" ? "/home" : location.pathname;
    const pathSegments = pathname.split("/").filter(Boolean);
    const data = recursivelySetData(response, pathSegments);
    setData(data);
  }, [location, response]);

  console.log("Current Location:", location.pathname);

  useEffect(() => {
    console.log("AppContext Data Updated:", data);
  }, [data]);

  return (
    <AppContext.Provider value={{ response, data }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
