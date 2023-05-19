import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/base";
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext({ user: null });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUser(null);
      } else {
        setUser(user);
      }
    });
    return unsubscribe;
  }, []);
  
  // useEffect(() => {
  //   const handle = setInterval(async () => {
  //     const user = auth.currentUser;
  //     if (user) await user.getIdToken(true);
  //   }, 10*60*1000);

  //   return () => clearInterval(handle);
  // }, []);
  
  return (
    <AuthContext.Provider value={{ user }}>
        {children}
    </AuthContext.Provider>
  );
}