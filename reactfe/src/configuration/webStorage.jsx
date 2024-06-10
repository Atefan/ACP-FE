export const addWebStorage = (value) => sessionStorage.setItem("JWT",value);
export const removeWebStorage = ()=>sessionStorage.removeItemItem("JWT")
export const getJwtWebStorage = ()=> sessionStorage.getItem("JWT")

export const addUIDWebStorage = (value) => sessionStorage.setItem("UID",value);
export const removeUIDWebStorage = ()=>sessionStorage.removeItemItem("UID")
export const getUIDWebStorage = ()=> sessionStorage.getItem("UID")