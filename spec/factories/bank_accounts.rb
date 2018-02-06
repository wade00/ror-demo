FactoryGirl.define do
  factory :bank_account do
    name { %w[Checking Savings].sample }
    routing_number { Array.new(9) { rand(9) }.join }
  end
end
