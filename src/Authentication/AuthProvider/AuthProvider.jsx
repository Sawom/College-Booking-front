import React from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  // const allContexts = useFirebase();
  return (
    <AuthContext.Provider >
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
