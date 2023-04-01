import React, { useState } from 'react';

export const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openNotification, setOpentNotification] = useState(false);
    const [userInfo, setUserInfo] = useState();
    const [openChat, setOpenChat] = useState(false);
    return (
        <AppContext.Provider
            value={{
                toggleSidebar,
                setToggleSidebar,
                userInfo,
                setUserInfo,
                openChat,
                setOpenChat,
                openSearch,
                setOpenSearch,
                openNotification,
                setOpentNotification,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
