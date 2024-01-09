import React, { useState, useEffect }  from 'react'
import Select from 'react-select'
import DataModelRequestTs from './DataModelRequestTs'
import './DataModelSelect.css'

function DataModelSelect() {
  // to store the datamodels & selected datamodels
  const [datamodels, setDatamodels] = useState([]);
  const [selectedDatamodels, setSelectedDatamodels] = useState('');
  const handleChange = (selectedDatamodels) => {
    setSelectedDatamodels(selectedDatamodels)
  };

  // Make API call to get all datamodels on mount of the component
  useEffect(() => {
    fetch('http://localhost:5001/api/v1/data-models-get')
      .then(res => res.json())
      .then(data => {
        setDatamodels(data);
      });
  }, []);

  // Render the datamodel list
  return (
    <div className='dm-selector'>
      <Select 
        options={datamodels}
        value={selectedDatamodels}
        isMulti={true}
        closeMenuOnSelect={false}
        onChange={handleChange}
      />
      <DataModelRequestTs dms={selectedDatamodels}/>

    </div>
  );
}

export default DataModelSelect