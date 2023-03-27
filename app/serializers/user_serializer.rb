class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :greeting, :email, :is_manager
  
  has_many :reviews
  has_many :favorites
end
