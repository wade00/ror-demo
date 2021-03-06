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
    <a href={`/bank_accounts/${attributes.id}`}>
      <div className="bank-account-list-cell">
        <p>
          { attributes.name } ( { routingNumberDisplay(attributes.routing_number) } )
        </p>
        <p>${ attributes.balance }</p>
      </div>
    </a>
  )
}

function routingNumberDisplay(num) {
  return num.replace(/.(?=.{4})/g, 'x');
}

export default BankAccountsIndexCell
