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
      <h2>Edit Page</h2>
      <BankAccountsEditForm
        authenticity_token={ authenticity_token }
        bank_account={ bank_account }
      />
    </div>
  )
}

export default BankAccountsEdit
