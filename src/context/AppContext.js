import React, { createContext, useContext, useState } from "react";
// import cogoToast from "cogo-toast";

const appContext = createContext({});
export function AppContextProvider(props) {
  const loginStatus = JSON.parse(
    localStorage.getItem("loginStatus") || "false"
  );

  const userData = JSON.parse(localStorage.getItem("user") || "{}");

  const { children } = props;

  const localData = JSON.parse(localStorage.getItem("appData") || "{}");
  const [state, setState] = useState(localData);
  const [loader, setLoader] = useState(false);
  const setGlobalState = (data, cb) => {
    const setData = { ...localData, ...(data || {}) };
    localStorage.setItem("appData", JSON.stringify(setData));
    setState(setData);
  };
  const [popUpSelectedData, setPopUpSelectedData] = React.useState(null);
  const [isLoggedIn, setLoginStatus] = React.useState(loginStatus);
  const [user, setUser] = React.useState(userData);

  const [filterQuery, setFilterQuery] = useState({
    locality: "",
    title: "",
  });

  // React.useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     // Check if the event is due to a page refresh
  //     const isRefreshing =
  //       event.currentTarget.performance.navigation.type === 1;

  //     console.log(isRefreshing);

  //     // Clear local storage only if it's not a refresh
  //     if (!isRefreshing) {
  //       localStorage.removeItem("user");
  //     }
  //   };

  //   // Attach the event listener
  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  const [userOpened, setUserOpened] = useState("");

  const handleLoginSuccess = (data) => {
    localStorage.setItem("loginStatus", "true");
    localStorage.setItem("user", JSON.stringify(data));
    setLoginStatus(true);
    setUser(data);
  };

  const handleLogoutSuccess = () => {
    localStorage.removeItem("loginStatus", "false");
    localStorage.removeItem("user", JSON.stringify({}));
    localStorage.removeItem("selectedLocality");
    setLoginStatus(false);
    setUser([]);
  };

  const handleLocationSelection = (data) => {
    setFilterQuery((prevState) => ({
      ...prevState,
      locality: data.title,
      title: data.title,
    }));
  };

  const handleUserOpened = (data) => {
    setUserOpened(data);
  };

  return (
    <appContext.Provider
      value={{
        globalState: state,
        setGlobalState,
        loader,
        setLoader,
        popUpSelectedData,
        setPopUpSelectedData,
        isLoggedIn,
        handleLoginSuccess: handleLoginSuccess,

        handleLogoutSuccess: handleLogoutSuccess,
        handleLocationSelection: handleLocationSelection,
        handleUserOpened: handleUserOpened,
        user,
        setUser: setUser,
        filterQuery,
        userOpened,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export function useAppContext() {
  return useContext(appContext);
}
