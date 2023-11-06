// AuthContext.js
import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(()=>{
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    const [accessToken, setAccessToken] =useState(() => {
        const storedUserData = localStorage.getItem('accessToken');
        return storedUserData ? JSON.parse(storedUserData) : null;
    });

    const login = (prop) => {
        setIsLoggedIn(true);
        localStorage.setItem('accessToken',JSON.stringify(prop));
        localStorage.setItem('isLoggedIn',"true");
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('isLoggedIn');
    };
    

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout , accessToken}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
// export const getItem = () => useContext(AuthContext);
