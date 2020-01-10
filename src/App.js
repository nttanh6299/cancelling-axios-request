import React, { useState, useEffect } from 'react';

import Fetcher from './Fetcher';
import FetcherCancel from './FetcherCancel';

function App() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMounted(false);
    }, 500);
  }, []);

  return (
    <div className="App">
      <Fetcher url={'https://reqres.in/api/users/2?delay=2'} />
      <hr/>
      {mounted && <FetcherCancel url={'https://reqres.in/api/users/2?delay=2'} />}
    </div>
  );
}

export default App;
