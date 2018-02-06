# Serializer for BankAccounts
class BankAccountSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :routing_number, :balance
  belongs_to :bank
end
