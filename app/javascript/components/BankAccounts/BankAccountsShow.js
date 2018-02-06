import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as Types from 'types'

BankAccountsShow.propTypes = {
  bank_account: Types.bankAccount,
}

BankAccountsShow.defaultProps = {
  bank_account: {},
}

function BankAccountsShow ({ bank_account }) {
  const { attributes } = bank_account
  return (
    <div>
      <h2>Show Page</h2>
      <a href={`/bank_accounts/${attributes.id}/edit`}>
        Edit
      </a>
      <h3>{ attributes.name }</h3>
      <p>{ attributes.routing_number }</p>
      <p>{ attributes.balance }</p>
    </div>

  )
}

export default BankAccountsShow
