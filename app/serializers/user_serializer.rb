class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :greeting, :email, :is_manager, :properties

  has_many :favorites
  has_many :properties
  has_many :properties, through: :favorites
end
