import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as Types from 'types'

FormErrors.propTypes = {
  errors: PropTypes.array,
}

FormErrors.defaultProps = {
  errors: [],
}

function FormErrors ({ errors }) {
  return (
    <div>
      {
        errors.map((error, idx) => {
          return <h4 key={ idx }>{ error }</h4>
        })
      }
    </div>
  )
}

export default FormErrors
