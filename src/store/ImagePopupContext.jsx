import { createContext, useState } from "react";


export const ImagePopUpContext = createContext(null)


export const ContextProvider = ({ children }) => {
    const [popupPost, setPopUpPost] = useState(null)
    return (<ImagePopUpContext.Provider value={{ popupPost, setPopUpPost }}>
        {children}
    </ImagePopUpContext.Provider>)
}