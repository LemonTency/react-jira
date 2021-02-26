import { useEffect, useState } from "react";
export const cleanObject = (object) => {
  let result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (!value) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (cb) => {
  useEffect(() => {
    cb();
  }, []);
};

// 防抖函数
export const debounce = (func, delay) => {
  let timeout;
  return (...param) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(param);
    }, delay);
  };
};

// const log = debounce(() => console.log('pppppp'), 5000)
// log()
// log()
// log()
// 防抖hook
export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    //在useEffect中，return出来的回调的执行时期就是在上次efferct执行完之后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
