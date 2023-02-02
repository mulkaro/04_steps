import React, {useState} from 'react';
import EnterForm from './EnterForm';
import TableForm from './TableForm';
import shortid from 'shortid';

function DataControl() {


  //const walksList = [];

  const [walks, setWalks] = useState([]);

  const [search, setSearch] =useState("");
  
  const [frmInputData, setInputData] = useState({
    //id: '',
    date: '',
    dist: ''
  });

  const handleChange = (evt) => {
    const newInput = (data) => ({...data, [evt.target.name]: evt.target.value})
    setInputData(newInput)
  };

  const handleSearchChange = (evt) => {
    setSearch(evt.target.value)
  };

/*  const handleFormChange = (evt) => {
    const { edtdate, edtdist, datevalue, distvalue} = evt.target;
    setForm((prevForm) => ({... prevForm, [edtdate]: datevalue, [edtdist]: distvalue}));
  };

  const handleAddRow = (evt) => {
    evt.preventDefault();
    const newWalk = { 
      id: shortid.generate(), 
      date: frmInputData.date,
      dist: frmInputData.dist
      };
    setWalks((prevRow => [...prevRow, newWalk]));
    setInputData({date: newWalk.date, dist: newWalk.dist});
    walksList.append(newWalk);
    //setTableForm({edtdate: newWalk.edtdate, edtdist: newWalk.edtdist});
    console.log(walksList);
  };
*/  
  const handleDeleteRow = (walks) => () => {
    setWalks(prevWalks => prevWalks.filter(o => o.id !== walks.id))
  }; 

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newWalk = { 
      id: shortid.generate(), 
      date: frmInputData.date,
      dist: frmInputData.dist
      };
    //const newWalk = (data) => ([...data, frmInputData]);
    //setWalks(newWalk);
    setWalks((prevRow => [...prevRow, newWalk]));
    const emptyInput = {id: '', date: '', dist: ''};
    setInputData(emptyInput);
  };

  const handleEditRow = (evt) => {};

return(
    <div className="app">
        <EnterForm onChange={handleChange} onSubmit={handleSubmit} form={frmInputData} />
        <TableForm onEditdRow={handleEditRow} onDeletedRow={handleDeleteRow} data={walks} />
    </div>
)
}

export default DataControl;
