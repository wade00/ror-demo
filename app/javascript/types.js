import PropTypes from 'prop-types'

export const bank = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  street_address: PropTypes.string.isRequired,
  street_address_two: PropTypes.string,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
})

export const bankAccount = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  routing_number: PropTypes.string.isRequired,
  bank_id: PropTypes.number.isRequired,
})
