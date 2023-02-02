import './../index.css';
import React from 'react';

function EnterForm({onChange, onSubmit, form}) {
  return (
      <form name="frmInputData" className="form"  onSubmit={onSubmit} vertical-align="middle" display="inline-block">
        <table>
          <tr>
            <th>
              <label className="label" htmlFor="fld1name">Дата (ДД.ММ.ГГГГ)</label>
            </th>
            <th>
              <label className="label" htmlFor="fld2name">Пройдено км</label>
            </th>
          </tr>
          <tr>
            <td>
              <input className="input" type="text" onChange={onChange} name="date" value={form.date}/>
            </td>
            <td>
              <input className="input" type="text" onChange={onChange} name="dist" value={form.dist}/>
            </td>
            <td>
              <button type="submit" className="button">ОК</button>
            </td>
          </tr>
        </table>
        <br></br>
      </form>
  )
}

export default EnterForm;
