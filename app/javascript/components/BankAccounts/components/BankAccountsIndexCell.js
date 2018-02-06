import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as Types from 'types'

BankAccountsIndexCell.propTypes = {
  bank_account: Types.bankAccount,
}

BankAccountsIndexCell.defaultProps = {
  bank_account: {},
}

function BankAccountsIndexCell ({ bank_account }) {
  const { attributes } = bank_account
  return (
    <div>
      <a href={`/bank_accounts/${attributes.id}`}>{ attributes.name }</a>
      <p>{ attributes.routing_number }</p>
      <p>{ attributes.balance }</p>
    </div>

  )
}

export default BankAccountsIndexCell
