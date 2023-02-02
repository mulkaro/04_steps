import './../index.css';
import React from 'react';
import editpng from './../img/edit.png';
import delpng from './../img/delete.png';
import './DataControl';

function TableForm({onEditdRow, onDeletedRow, data}) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="table__row--header">
            <th>Дата (ДД.ММ.ГГ)</th>
            <th>Пройдено км</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr >
                <td> {row.curdate}</td>
                <td> {row.curdist}</td>
                <td>
                  <input type="image" src={editpng} onClick={onEditdRow} alt="Изменить показания"/>
                </td>
                <td>
                  <input type="image" src={delpng} onClick={onDeletedRow} alt="Удалить показания"/>
                </td>
              </tr>
            )}
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TableForm;
