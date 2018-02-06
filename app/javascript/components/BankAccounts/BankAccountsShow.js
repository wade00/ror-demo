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
      <h1>{ attributes.name }</h1>
      <a
        className="inline-link"
        href={`/bank_accounts/${attributes.id}/edit`}>
        Edit
      </a>
      <div className="bank-account-list-cell">
        <p>Routing Number: { attributes.routing_number }</p>
        <p>Current Balance: ${ attributes.balance }</p>
      </div>
      <a href="/bank_accounts" className="button button-left">
        Back
      </a>
    </div>
  )
}

export default BankAccountsShow
