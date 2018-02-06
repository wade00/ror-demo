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
  return (
    <div>
      <h3>{ bank_account.name }</h3>
      <p>{ bank_account.routing_number }</p>
      <p>{ bank_account.balance }</p>
    </div>

  )
}

export default BankAccountsIndexCell
