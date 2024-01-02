import React from 'react'
import './style.css'

function Counter() {
  const stud = [
    { Name: 'Raj', Age: 20, City: 'Surat' },
    { Name: 'Prince', Age: 19, City: 'Daman' },
    { Name: 'Aarti', Age: 20, City: 'Goa' }
  ]

  return (
    <div>
      <h2 className='primary'>Array Example</h2>
      <table><thead>
        <tr style={{ textAlign: 'left' }}>
          <th>Id </th>
          <th>Name </th>
          <th>Age </th>
          <th>City</th>
        </tr></thead>
        <tbody>
          {stud.map((item, data) =>
            <tr key={data}>
              <td> {data+1}</td>
              <td> {item.Name}</td>
              <td> {item.Age}</td>
              <td> {item.City}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Counter;
