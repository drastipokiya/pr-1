// Write a JS program that use map, reduce and filter function over a JSON data and display in a proper table format.

import React from 'react';

const jsonData = [
  { name: 'John', age: 25, city: 'New York' },
  { name: 'Alice', age: 30, city: 'London' },
  { name: 'Bob', age: 35, city: 'Paris' },
  { name: 'Jane', age: 28, city: 'Tokyo' },
];

const TableComponent = () => {
  // Filtering the JSON data
  const filteredData = jsonData.filter((person) => person.age > 25);

  // Mapping the filtered data to table rows
  const tableRows = filteredData.map(({ name, age, city }) => (
    <tr key={name}>
      <td>{name}</td>
      <td>{age}</td>
      <td>{city}</td>
    </tr>
  ));

  // Reducing the filtered data to calculate total age
  const totalAge = filteredData.reduce((acc, person) => acc + person.age, 0);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <p>Total Age: {totalAge}</p>
    </div>
  );
};

export default TableComponent;
