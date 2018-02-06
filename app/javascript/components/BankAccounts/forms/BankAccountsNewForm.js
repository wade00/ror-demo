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
      <label htmlFor='bank_account[name]'>
        Name&nbsp;
      </label>
      <input name='bank_account[name]' type='text' />

      <label htmlFor='bank_account[routing_number]'>
        Routing Number&nbsp;
        </label>
      <input name='bank_account[routing_number]' type='text' />

      <label htmlFor='bank_account[bank_id]'>
        Bank&nbsp;
      </label>
      <select name='bank_account[bank_id]'>
        {
          banks.map((bank, idx) => {
            return <option key={ idx } value={ bank.id }>{ bank.name }</option>
          })
        }
      </select>
      <input type='submit' className="submit-button"/>
    </form>
  )
}

BankAccountsNewForm.propTypes = propTypes

BankAccountsNewForm.defaultProps = defaultProps

export default BankAccountsNewForm
