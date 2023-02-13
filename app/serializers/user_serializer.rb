class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :greeting, :email, :password_digest
end
