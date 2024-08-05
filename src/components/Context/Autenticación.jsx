import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../../service/firebase';
import { signOut as firebaseSignOut } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            throw error;
        }
    };

    const value = {
        user,
        loading,
        signOut
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};