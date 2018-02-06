import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as Types from 'types'
import BankAccountsEditForm from './forms/BankAccountsEditForm'

BankAccountsEdit.propTypes = {
  bank_account: Types.bankAccount,
  authenticity_token: PropTypes.string,
}

BankAccountsEdit.defaultProps = {
  bank_account: {},
}

function BankAccountsEdit ({ bank_account, authenticity_token }) {
  const { attributes } = bank_account
  return (
    <div>
      <h1>Editing { attributes.name }</h1>
      <a
        data-confirm="Are you sure?"
        data-method="delete"
        href={`/bank_accounts/${attributes.id}`}
        rel="nofollow"
        className="inline-link delete-link">
        Delete
      </a>
      <BankAccountsEditForm
        authenticity_token={ authenticity_token }
        bank_account={ bank_account }
      />
      <a href={`/bank_accounts/${attributes.id}`} className="button button-left">
        Back
      </a>
    </div>
  )
}

export default BankAccountsEdit
