import React, { useContext, useState, useEffect } from "react";
import Api from '../components/Api';
let UserContext = React.createContext();
const useAuth = () => {
  return useContext(UserContext);
};
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  function getInfo() {
    Api('api/get-user-info').get()
    .then(res=> {
      if(res && res.accessToken) {
        setUser(res);
        localStorage.set('user',res);
        setLoading(false);
      }
    })
  }
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
