import React from 'react'

/* 
Idea: Data Model section that allows a user to pick any data model 
from their environment to generate a typescript representation of the data model.
Needs the flask backend container to be running
Not working correctly yet
*/
const DataModelIntro = () => {
  return (
    <div className='intro'>
      <div className="container">
        <h1>Data Model Representation</h1>
        <p>Data models can be represented as TypeScript within the project to enable intellisense.</p>
      </div>
    </div>
  )
}

export default DataModelIntro