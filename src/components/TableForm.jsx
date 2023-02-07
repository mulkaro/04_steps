import './../index.css';
import React from 'react';
import editpng from './../img/edit.png';
import delpng from './../img/delete.png';
import './DataControl';

function TableForm({onEditRow, onDeletedRow, data}) {
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
              <tr key={row.id}>
                <td> {row.date}</td>
                <td> {row.dist}</td>
                <td>
                  <input type="image" src={editpng} onClick={() => onEditRow(row.id)} alt="Изменить показания" />
                </td>
                <td>
                  <input type="image" src={delpng} onClick={() => onDeletedRow(row.id)} alt="Удалить показания" />
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
