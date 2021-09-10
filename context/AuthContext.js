import React, {createContext, useContext, useState} from "react";


export const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
    const state = useState(false);
    return <AuthContext.Provider value={state}/>
};

export const useAuth = () => useContext(AuthContext);
