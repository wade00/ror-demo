import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as Types from 'types'

BanksIndex.propTypes = {
  banks: PropTypes.arrayOf(Types.bank)
}

BanksIndex.defaultProps = {
  banks: [],
}

function BanksIndex ({ banks }) {
  return (
    <div>
      {
        banks.map((bank, idx) => {
          return <h3 key={ idx }>{ bank.name }</h3>
        })
      }
    </div>
  )
}

export default BanksIndex
