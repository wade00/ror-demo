import React from 'react'
import { validate } from 'validate.js'

const propTypes = {}

function BankAccountsEditForm ({ bank_account, authenticity_token }) {
  const { attributes } = bank_account
  return (
    <form
      role='form'
      acceptCharset='UTF-8'
      action={`/bank_accounts/${attributes.id}.json`}
      method='post'
    >
      <input type='hidden' name='authenticity_token' value={ authenticity_token } />
      <input type='hidden' name='_method' value='put' />
      <input name='bank_account[name]' type='text' defaultValue={ attributes.name } />
      <input type='submit' />
    </form>
  )
}

BankAccountsEditForm.propTypes = propTypes

export default BankAccountsEditForm
