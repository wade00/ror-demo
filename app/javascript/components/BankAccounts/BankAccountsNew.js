import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as Types from 'types'
import BankAccountsNewForm from './forms/BankAccountsNewForm'

BankAccountsNew.propTypes = {
  banks: PropTypes.arrayOf(Types.bank),
  authenticity_token: PropTypes.string,
}

BankAccountsNew.defaultProps = {
  banks: [],
}

function BankAccountsNew ({ banks, authenticity_token }) {
  return (
    <div>
      <h2>Time to Create a New Account</h2>
      <BankAccountsNewForm
        authenticity_token={ authenticity_token }
        banks={ banks }
      />
    </div>
  )
}

export default BankAccountsNew
