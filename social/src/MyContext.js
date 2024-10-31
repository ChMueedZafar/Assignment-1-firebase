// MyContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const MyContext = createContext();

// Custom hook to use the context
export const useMyContext = () => useContext(MyContext);

// Provider component
export const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState("Initial Value");

  return (
    < MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
