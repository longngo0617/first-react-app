import React, { useContext, useState, useEffect } from "react";

let UserContext = React.createContext();
const useAuth = () => {
  return useContext(UserContext);
};
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  function login(user) {
    return fetch("https://cfd-reactjs.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((res) => {
        if (res.error) {
          return res;
        } else {
          localStorage.setItem("user", JSON.stringify(res));
          setUser(res);
          
        }
      });
  }
  useEffect(() => {
      
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      setUser(user || {});
      setLoading(false);
    } catch (error) {
        setUser({});
        setLoading(false); 
    }
  }, []);

  const value = {
    user,
    login,
  };
  return <UserContext.Provider value={value}>{!loading && children}</UserContext.Provider>;
};

export default UserProvider;
export { useAuth };
