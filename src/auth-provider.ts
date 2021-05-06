import { User } from "../src/screens/project-list/search-panel";
const localStorageKey = "__auth_provider_token__";

//从本地存储中获取token
export const getToken = () => window.localStorage.getItem(localStorageKey);
const apiUrl = process.env.REACT_APP_API_URL;
//设置token
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

//登陆之后将token存储在localstorage中
export const login = (data: {
  username: string;
  password: string;
}): Promise<User> => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (response) => {
      if (response.ok) {
        return handleUserResponse(await response.json());
      } else {
        return Promise.reject(data);
      }
    })
    .catch(async (response) => {
      return Promise.reject(response);
    });
};
export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
