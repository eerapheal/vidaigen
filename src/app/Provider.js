"use client";
import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../config/firebaseConfig";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AuthContext } from "./_context/AuthContext";

const Provider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize with null for clarity

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUser(user); // Update the user state when authentication changes
      },
      (error) => {
        console.error("Authentication error:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}> {/* Pass user correctly */}
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
export default Provider;