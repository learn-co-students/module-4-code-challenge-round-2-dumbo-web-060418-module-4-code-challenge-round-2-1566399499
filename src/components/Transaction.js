import React from 'react'

const Transaction = (props) => {

  const {postedAt, description, category, amount} = props.trans

  return (
    <tr>
      <td>{postedAt}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default Transaction
