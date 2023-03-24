class RatingSerializer < ActiveModel::Serializer
  attributes :id, :rating

  belongs_to :user
  belongs_to :property
end
