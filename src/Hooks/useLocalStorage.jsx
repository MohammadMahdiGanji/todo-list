import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [value, setValue] = useState([]);
  const [key, setKey] = useState(null);

  const setLocalStorage = (newKey, newValue) => {
    setKey(newKey);
    setValue(newValue);
    localStorage.setItem(newKey, JSON.stringify(newValue));
  };

  const getLocalStirage = (targetKey) => {
    setKey(targetKey);
    const data = JSON.parse(localStorage.getItem(targetKey));
      setValue(data || []);
    return data || [];
  };

  const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  return [value, key, setLocalStorage, getLocalStirage, removeLocalStorage];
};
