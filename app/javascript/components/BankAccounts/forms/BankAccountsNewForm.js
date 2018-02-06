import React from 'react'
import { validate } from 'validate.js'

const propTypes = {}

const defaultProps = {
  banks: [],
}

function BankAccountsNewForm ({ banks=[], authenticity_token }) {
  return (
    <form
      role='form'
      acceptCharset='UTF-8'
      action={`/bank_accounts`}
      method='post'
    >
      <input type='hidden' name='authenticity_token' value={ authenticity_token } />
      <input name='bank_account[name]' type='text' />
      <input name='bank_account[routing_number]' type='text' />
      <select name='bank_account[bank_id]'>
        {
          banks.map((bank, idx) => {
            return <option key={ idx } value={ bank.id }>{ bank.name }</option>
          })
        }
      </select>
      <input type='submit' />
    </form>
  )
}

BankAccountsNewForm.propTypes = propTypes

BankAccountsNewForm.defaultProps = defaultProps

export default BankAccountsNewForm
