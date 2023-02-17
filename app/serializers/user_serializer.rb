class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :greeting, :email, :is_manager
end
