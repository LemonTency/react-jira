import React from "react";
interface User {
  name: string;
  id: number;
}
interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    id: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) => setParam({ ...param, name: evt.target.value })}
        ></input>
        <select
          value={param.id}
          onChange={(evt) => setParam({ ...param, id: evt.target.value })}
        >
          <option value="">负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
