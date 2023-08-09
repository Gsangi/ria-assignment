import {createContext, useContext} from "react";


const UserContext = createContext({})

export const useUserContext = () => {
    useContext(UserContext)
}


export const UserProvider = (children) => {

    const pokemonData = () => {
        return "data"
    }

    return (
        <UserContext.Provider
            value={{
                pokemonData
            }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
