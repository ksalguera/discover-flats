class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :website, :phone_number, :full_address, :pet_limit, 
  :dogs_allowed, :dog_restrictions, :dog_fee, :dog_deposit, :cats_allowed, :cat_restrictions,
  :cat_fee, :cat_deposit, :admin_fee, :application_fee, :description
  
  has_many :images
  has_many :favorites
  has_many :users, through: :favorites
  
end
