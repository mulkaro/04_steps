import React, {useState} from 'react';
import EnterForm from './EnterForm';
import TableForm from './TableForm';
import shortid from 'shortid';

function DataControl() {

  const [walks, setWalks] = useState([]);

  const [search, setSearch] =useState("");
  
  const [frmInputData, setInputData] = useState({
    //id: '',
    date: '',
    dist: ''
  });

  let sortedWalks = [...walks];
  walks.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });

  const handleChange = (evt) => {
    const newInput = (data) => ({...data, [evt.target.name]: evt.target.value})
    setInputData(newInput)
  };

  const handleSearchChange = (evt) => {
    setSearch(evt.target.value)
  };

  function handleDeleteRow(id) {
    setWalks(prevWalks => walks.filter((row) => row.id !== id)
      )
  }; 

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newWalk = { 
      id: shortid.generate(), 
      date: frmInputData.date,
      dist: frmInputData.dist
      };
    setWalks((prevRow => [...prevRow, newWalk]));
    const emptyInput = {id: '', date: '', dist: ''};
    setInputData(emptyInput);
  };

  function handleEditRow (id) {
    frmInputData.date = walks[id].date;
    frmInputData.dist = walks[id].dist;
  };

return(
    <div className="app">
        <EnterForm onChange={handleChange} onSubmit={handleSubmit} form={frmInputData} />
        <TableForm onEditRow={handleEditRow} onDeletedRow={handleDeleteRow} data={walks} />
    </div>
)
}

export default DataControl;
