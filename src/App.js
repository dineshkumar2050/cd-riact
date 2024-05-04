import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextDisplay from './DisplayText';

function App() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await axios.get('http://localhost:3050/login'
  //       ,{
  //       headers: {
  //         username: 'Dinesh',
  //         password: '123456'
  //       }
  //     }
  //     );
  //     // fetch('http://localhost:3050/login')
  //     // .then(res => res.json())
  //     // .then((res) => setData(res.data))
  //     console.log('--data-- -> ', data)
  //     if(data && data.data && data.data.status === 200) {
  //       setData(data.data.data)
  //     }
  //   }
  //   fetchData();
  // }, [])
  return (
    <div className="App">
      <h1>Fetched data is</h1>
      {/* {
        data ? <h2>{data}</h2> : null
      } */}
      <TextDisplay />
    </div>
  );
}

export default App;
