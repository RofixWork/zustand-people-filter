import React from "react";

const TableRow = ({
  id,
  first_name,
  last_name,
  email,
  gender,
  category,
  color,
}) => {
  return (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{category}</td>
      <td>{color}</td>
    </tr>
  );
};

export default TableRow;
