class PropertyRatingSerializer < ActiveModel::Serializer
  attributes :id, :rating, :user_id
end
