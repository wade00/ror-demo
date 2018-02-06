class CreateBank < ActiveRecord::Migration[5.1]
  def change
    create_table :banks do |t|
      t.string :name
      t.string :street_address
      t.string :street_address_two
      t.string :city
      t.string :state
      t.string :zip
    end
  end
end
