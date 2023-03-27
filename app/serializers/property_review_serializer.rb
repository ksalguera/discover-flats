class PropertyReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :description, :user_id, :created_at
end
