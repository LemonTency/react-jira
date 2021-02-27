import { useEffect, useState } from "react";
interface resultOption {
  [key: string]: string;
}

export const cleanObject = (object: resultOption) => {
  let result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (!value) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (cb: () => void) => {
  useEffect(() => {
    cb();
  }, []);
};

// 防抖函数
export const debounce = (func: () => void, delay: number) => {
  let timeout: number;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => {
      func();
    }, delay);
  };
};

// const log = debounce(() => console.log('pppppp'), 5000)
// log()
// log()
// log()
// 防抖hook
export const useDebounce = <T>(value: T, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    //在useEffect中，return出来的回调的执行时期就是在上次efferct执行完之后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
