import React, {useState} from "react";

export const UserContext = React.createContext();

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();

} 

export const UserProvider = ({ children }) => {
  const [name, setname] = useState(getCookie('name'));
  const [email, setEmail] = useState(getCookie('email'));
  const [userid, setUserId] = useState(getCookie('userid'));
  return (
    <UserContext.Provider value={{ userid, setUserId,name, setname,email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

