import { useMemo, useEffect, useReducer, createContext } from "react";

export const ContextGlobal = createContext(undefined);

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state === "" ? "dark" : "";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, "");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch({ type: "TOGGLE_THEME" });
    }
  }, []);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const contextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
