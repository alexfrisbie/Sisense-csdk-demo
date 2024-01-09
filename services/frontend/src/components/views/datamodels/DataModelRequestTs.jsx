import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function DataModelRequestTs(props) {
  // const [commands, setCommands] = useState([]);
  const RequestDataModels = () => {
    fetch('http://localhost:5001/api/v1/data-models-post', {
      method: "POST",
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props.dms)
    })
  }

  return (
    <div className='container'>
      <Button 
        variant='outline-primary'
        type='submit'
        onClick={RequestDataModels}
        >
      Get Data Models
      </Button>
    </div>
  )
}

export default DataModelRequestTs