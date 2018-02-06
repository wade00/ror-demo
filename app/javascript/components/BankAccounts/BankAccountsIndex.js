import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as Types from 'types'
import BankAccountsIndexCell from './components/BankAccountsIndexCell'

BankAccountsIndex.propTypes = {
  bank_accounts: PropTypes.arrayOf(Types.bankAccount)
}

BankAccountsIndex.defaultProps = {
  bank_accounts: [],
}

function BankAccountsIndex ({ bank_accounts }) {
  return (
    <div>
      {
        bank_accounts.map((bank_account, idx) => {
          return <BankAccountsIndexCell key={ idx } bank_account={ bank_account } />
        })
      }
    </div>
  )
}

export default BankAccountsIndex
