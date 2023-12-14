// RegisteredUsersManager.tsx
import React, { createContext, useContext, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

type RegisteredUsersContextType = {
  users: User[];
  addUser: () => void;
};

const RegisteredUsersContext = createContext<RegisteredUsersContextType | undefined>(undefined);

export const useRegisteredUsers = () => {
  const context = useContext(RegisteredUsersContext);
  if (!context) {
    throw new Error('useRegisteredUsers must be used within a RegisteredUsersProvider');
  }
  return context;
};

export const RegisteredUsersProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const newUser: User = {
      id: randomId,
      name: `User ${randomId}`,
      email: `user${randomId}@example.com`,
    };
    setUsers([...users, newUser]);
  };

  const contextValue: RegisteredUsersContextType = {
    users,
    addUser,
  };

  return (
    <RegisteredUsersContext.Provider value={contextValue}>
      {children}
    </RegisteredUsersContext.Provider>
  );
};
