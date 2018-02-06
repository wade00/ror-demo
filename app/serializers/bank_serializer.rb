# Serializer for BankAccounts
class BankSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :street_address, :street_address_two, :city, :state, :zip
  has_many :bank_accounts
end
