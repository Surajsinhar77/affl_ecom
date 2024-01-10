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

    const [userData, SetUserData] = useState(()=>{
        return JSON.parse(localStorage.getItem('userData'));
    });

    const[adminLogIn, setAdminLogIn] = useState(()=>{
        return localStorage.getItem("adminLogIn") === 'true';
    })

    const[adminAccessToken, setAdminAccessToken] = useState(()=>{
        const adAccessToken =  localStorage.getItem('adminAccessToken');
        return adAccessToken ? JSON.parse(adAccessToken) : null;
    })

    // Temprory Login System
    const AdminLoginFunction = (prop) =>{
        setAdminLogIn(true);
        localStorage.setItem('adminAccessToken', JSON.stringify(prop.accessToken));
        localStorage.setItem('adminLogIn', 'true');
    }
    const AdminLogoutFunction = () =>{
        setAdminLogIn(false);
        localStorage.removeItem('adminAccessToken');
        localStorage.removeItem('adminLogIn');
    }

    const login = (prop) => {
        setIsLoggedIn(true);
        localStorage.setItem('userData', JSON.stringify(prop.userData));
        localStorage.setItem('accessToken',JSON.stringify(prop.accessToken));
        localStorage.setItem('isLoggedIn',"true");
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userData');
        return;
    };
    

    return (
        <AuthContext.Provider value={{ 
                isLoggedIn, 
                login, 
                logout , 
                accessToken, 
                userData, 
                SetUserData,
                AdminLoginFunction,
                adminLogIn,
                AdminLogoutFunction
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
// export const getItem = () => useContext(AuthContext);