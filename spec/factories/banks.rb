FactoryGirl.define do
  factory :bank do
    name %w[Chase BOA].sample
    street_address '123 W. North Ave.'
    street_address_two 'Suite 1001'
    city 'Chicago'
    state 'IL'
    zip '60656'
  end
end
