class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.string :image_url
      t.integer :property_id

      t.timestamps
    end
  end
end
