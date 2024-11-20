import { createContext, useContext } from "react";
import { AppContextType } from "./types";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => useContext(AppContext)!;
