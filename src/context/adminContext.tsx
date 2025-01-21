import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useGetIsAdmin } from '../api/hooks/useRiskThemes';

const AdminContext = createContext<boolean | null>(null);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const dataIsAdmin = true; // const { data: dataIsAdmin } = useGetIsAdmin(); 
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    if (dataIsAdmin !== undefined) {
      setIsAdmin(dataIsAdmin);
    }
  }, [dataIsAdmin]);

  return (
    <AdminContext.Provider value={isAdmin}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);