import { createContext, ReactNode, useContext, useState } from "react";

interface typeUserData {
  name: string;
  password: string;
}

interface typeUserContext {
  userData: typeUserData | undefined;
  setUserData: (data: typeUserData) => void;
}

const UserContext = createContext<typeUserContext | undefined>(undefined);

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<typeUserData>();

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("User Context is not defined");
  }
  return context;
};
