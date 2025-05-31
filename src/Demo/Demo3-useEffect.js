import React, { useState, useEffect } from 'react';

function DataFetchDemo() {
  // Khởi tạo trạng thái để lưu dữ liệu
  const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const result = await response.json();
          setData(result);
      };
      fetchData();
    }, []); 

  return (
    <div>
      <h2>Demo 3: Tải dữ liệu đơn giản với useEffect</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name} ({user.email}) {user.phone}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchDemo;