abort('Rails is running in production mode!') if Rails.env.production?

puts 'Resetting the database...'

tables = %w[Bank BankAccount]

tables.each { |table| table.constantize.destroy_all }

# Create banks
BANK = FactoryGirl.create(:bank)

# Create bank account
2.times do |n|
  FactoryGirl.create(:bank_account,
                     name: %w[Checking Savings][n],
                     routing_number: Array.new(9) { rand(9) }.join,
                     bank_id: BANK.id)
end

puts 'Done! The database now has: '

tables.each { |table| puts "#{table.constantize.count} #{table.constantize.to_s.downcase}(s)" }
