class CreateBankAccount < ActiveRecord::Migration[5.1]
  def change
    create_table :bank_accounts do |t|
      t.string :nickname
      t.string :routing_number
      t.references :bank
    end
  end
end
