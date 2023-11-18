import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [role, setRole] = useState(localStorage.getItem("userRole")); // Tambahkan state untuk peran

  const login = (token, userRole) => {
    setAccessToken(token);
    setRole(userRole); // Setel peran saat login
    localStorage.setItem("accessToken", token);
    localStorage.setItem("userRole", userRole); // Simpan peran dalam penyimpanan lokal
  };

  const logout = () => {
    setAccessToken(null);
    setRole(null); // Hapus peran saat logout
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userRole"); // Hapus peran dalam penyimpanan lokal
  };

  return (
    <AuthContext.Provider value={{ accessToken, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
