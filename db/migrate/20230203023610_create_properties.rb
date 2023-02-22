class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :name
      t.string :image_url
      t.string :website
      t.string :phone_number_unformatted
      t.string :address_line_one
      t.string :address_line_two
      t.string :city
      t.string :state
      t.integer :zip
      t.text :description
      t.integer :pet_limit
      t.boolean :dogs_allowed
      t.text :dog_restrictions
      t.integer :dog_fee
      t.integer :dog_deposit
      t.boolean :cats_allowed
      t.text :cat_restrictions
      t.integer :cat_fee
      t.integer :cat_deposit
      t.integer :application_fee
      t.integer :admin_fee
      t.string :affordability
      t.integer :user_id
      t.timestamps
    end
  end
end
