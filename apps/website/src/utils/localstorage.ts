export const getLocalStorage = (key: string) => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
};

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
