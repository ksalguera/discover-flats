class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :affordability, :image_url, :website, :phone_number,
  :address_line_one, :address_line_two, :city, :state, :zip, :full_address, :pet_limit, 
  :dogs_allowed, :dog_restrictions, :dog_fee, :dog_deposit, :cats_allowed, :cat_restrictions,
  :cat_fee, :cat_deposit, :admin_fee, :application_fee, :description, :user_id
  
  has_many :images
  has_many :favorites
  # removed has_many :users, through: favorites - only want favorites to display
  # removed belongs_to :user - only want the user_id to display
end
