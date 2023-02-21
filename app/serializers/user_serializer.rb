class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :greeting, :email, :is_manager

  has_many :favorites
  has_many :properties, through: :favorites
end
