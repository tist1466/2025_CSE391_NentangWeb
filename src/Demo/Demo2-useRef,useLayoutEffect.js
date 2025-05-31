import React, { useRef, useLayoutEffect, useState, useEffect  } from 'react';

function AutoFocusWithResizeDemo() {
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // Đo chiều rộng input và điều chỉnh div bao quanh
    const inputWidth = inputRef.current.offsetWidth;
    setWidth(inputWidth);
    containerRef.current.style.width = `${inputWidth + 20}px`; // Thêm padding
    containerRef.current.style.height = '100px';
    containerRef.current.style.backgroundColor = inputWidth > 200 ? 'lightgreen' : 'lightcoral';
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Demo 2: Focus và resize với useLayoutEffect</h2>
      <div
        ref={containerRef}
        style={{
          border: '2px solid black',
          padding: '10px',
          transition: 'all 0.3s ease', // Hiệu ứng chuyển đổi mượt
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="This input is auto-focused"
          style={{ width: '300px', padding: '8px', margin: '0' }}
        />
      </div>
      <p>Input width: {width}px</p>
    </div>
  );
}

export default AutoFocusWithResizeDemo;