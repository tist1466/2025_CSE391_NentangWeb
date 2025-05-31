import React, { useState } from 'react';

function FormDemo() {
  // Khởi tạo trạng thái cho các trường input
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  // Hàm xử lý khi input thay đổi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      
    }));
  };
  console.log(formData);
  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${formData.username}, Email: ${formData.email}`);
  };

  return (
    <div>
      <h2>Demo 1: Form với useState</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h3>Output:</h3>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default FormDemo;