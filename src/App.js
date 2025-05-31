import React from 'react';
import FormDemo from './Demo/Demo1-useState';
import AutoFocusInputDemo from './Demo/Demo2-useRef,useLayoutEffect';
import DataFetchDemo from './Demo/Demo3-useEffect';
import './App.css'; // Giả sử có file CSS để định dạng

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>React Hooks Demo</h1>
      
      <section style={{ marginBottom: '40px' }}>
        <FormDemo />
      </section>
      
      <section style={{ marginBottom: '40px' }}>
        <AutoFocusInputDemo />
      </section>
      
      <section>
        <DataFetchDemo />
      </section>
    </div>
  );
}
export default App;