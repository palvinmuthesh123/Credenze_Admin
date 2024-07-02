export const getLocalStorageData = (value:any) => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem(value);
    if(user)
    {
      return JSON.parse(user);
    }
  }
  return undefined;
};
