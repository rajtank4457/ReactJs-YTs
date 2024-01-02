import React, { useEffect, useState } from 'react';

async function getdata() {
  let data = await fetch('https://dummyjson.com/products');
  data = await data.json();
  //console.log(data)
  return data.products;
}

export default function Datas() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getdata();
        // Check if the result is an array before updating the state
        if (Array.isArray(result)) {
          setDatas(result);
        } else {
          console.error('Data is not in the expected format:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Call</h1>
      <table border="2px">
        <thead>
          <tr>
            <td>ID</td>
            <td>title</td>
            <td>description</td>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(datas) && datas.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              {/* Add other columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
