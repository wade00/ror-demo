import React from 'react'
import { validate } from 'validate.js'

const propTypes = {}

function BankAccountsEditForm ({ bank_account, handleSubmit }) {
  const { attributes } = bank_account
  return (
    <form onSubmit={ handleSubmit }>
      <input name="name" type="text" value={ attributes.name } />
      <input type="submit" />
    </form>
  )
}

BankAccountsEditForm.propTypes = propTypes

export default BankAccountsEditForm
