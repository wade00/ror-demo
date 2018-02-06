# Serializer for BankAccounts
class BankAccountSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :routing_number, :balance
  belongs_to :bank
end
