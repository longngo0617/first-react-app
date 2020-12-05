import React, {useContext,useState } from 'react';

let UserContext = React.createContext();
const useAuth = ()  => {
    return useContext(UserContext);
}
const UserProvider = ({children}) =>{ 
    const [user,setUser] = useState({
        name: null,
        pass: '123',
        login: false
    })
    return (
        <UserContext.Provider value ={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );


}

export default UserProvider;
export {useAuth};
