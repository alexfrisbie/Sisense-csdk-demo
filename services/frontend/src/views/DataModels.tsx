import React from 'react'
import DataModelIntro from 'components/views/datamodels/DataModelIntro'
import DataModelSelect from 'components/views/datamodels/DataModelSelect'

const DataModels = () => {
  return (
    <div className='container'>
      <DataModelIntro />
      <DataModelSelect />
    </div>
  )
}

export default DataModels