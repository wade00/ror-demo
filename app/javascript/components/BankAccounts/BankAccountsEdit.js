import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as Types from 'types'
import BankAccountsEditForm from './forms/BankAccountsEditForm'

BankAccountsEdit.propTypes = {
  bank_account: Types.bankAccount,
}

BankAccountsEdit.defaultProps = {
  bank_account: {},
}

function BankAccountsEdit ({ bank_account }) {
  const { attributes } = bank_account
  return (
    <div>
      <h2>Edit Page</h2>
      <BankAccountsEditForm bank_account={ bank_account } handleSubmit={ () => alert('hi') } />
    </div>
  )
}

export default BankAccountsEdit
