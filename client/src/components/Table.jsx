import React from 'react'

const Table = ({ title, headData, renderBody, bodyData }) => {
    const renderHeander = ( item, index) => (
      <th key={index}>
        {item}
      </th>
    )
  return (
    <div>
      <h1>{ title }</h1>
      <table>
        <thead>
          <tr>
            {headData?.map((item, index) => renderHeander(item, index))}
          </tr>
        </thead>
        <tbody>
          {bodyData && bodyData.map((item,index) => renderBody(item, index))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;