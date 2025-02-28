"use client";
import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../config/firebaseConfig";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AuthContext } from "./_context/AuthContext";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const CreateUser = useMutation(api.users.CreateNewUsers);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser) => {
        if (firebaseUser) {
          const result = await CreateUser({
            name: firebaseUser.displayName,
            email: firebaseUser.email,
            pictureURL: firebaseUser.photoURL,
          });
          console.log("User after mutation:", result); // Log the result
          setUser(result);
        } else {
          setUser(null);
        }
      },
      (error) => {
        console.error("Authentication error:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
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
