// AuthContext.js
import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(()=>{
        return localStorage.getItem('isLoggedIn') === 'false';
    });

    const [userData, setUserData] =useState(() => {
        const storedUserData = localStorage.getItem('userData');
        return storedUserData ? JSON.parse(storedUserData) : null;
    });

    const login = (prop) => {
        console.log(prop);
        setUserData(prop);
        setIsLoggedIn(true);
        // localStorage.setItem(prop.Authorization)
        localStorage.setItem('userData',JSON.stringify(prop.userData));
        localStorage.setItem('isLoggedIn',"true");
    };

    const logout = () => {
        setUserData(null);
        setIsLoggedIn(false);
        localStorage.removeItem('userData');
        localStorage.removeItem('isLoggedIn');
    };
    

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout , userData}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
export const getItem = () => useContext(AuthContext);
