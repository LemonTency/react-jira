import React from "react";
interface ListOption {
  name: string;
  id: number;
  personId: number;
  organization: string;
  created: number;
}
interface User {
  name: string;
  id: number;
}
interface Option {
  list: ListOption[];
  users: User[];
}
export const List = ({ list, users }: Option) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{users.find((user) => user.id === item.personId)?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
