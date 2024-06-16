import { useState } from 'react'
import './App.css'

function App() {
  const [ radiosValue, setRadiosValue ] = useState('');

  return (
    <div className='container bg-dark mt-3 p-3'>
      <h2 className='text-white mb-2'>useState</h2>
      <div className="group d-flex gap-1">
        <input
          name='group1'
          type="radio"
          id='html'
          value={radiosValue}
          onChange={(e) => setRadiosValue(e.target.id)}
        />
        <label className='text-white' htmlFor="html">html</label>
      </div>
      <div className="group d-flex gap-1">
        <input
          name='group1'
          type="radio"
          id='css'
          value={radiosValue}
          onChange={(e) => setRadiosValue(e.target.id)}
        />
        <label className='text-white' htmlFor="css">css</label>
      </div>
      <div className="group d-flex gap-1">
        <input
          name='group1'
          type="radio"
          id='js'
          value={radiosValue}
          onChange={(e) => setRadiosValue(e.target.id)}
        />
        <label className='text-white' htmlFor="js">js</label>
      </div>
      <h2 className='bg-warning text-white p-3 mt-3'>{radiosValue}</h2>
    </div>
  )
}

export default App
