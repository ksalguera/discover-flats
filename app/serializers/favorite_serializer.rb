class FavoriteSerializer < ActiveModel::Serializer
  attributes :id

  # belongs_to :user
  belongs_to :property
end
