FactoryGirl.define do
  factory :bank_account do
    name "Bank Account"
    routing_number { rand(0..100) }
  end
end
