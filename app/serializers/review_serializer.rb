class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :description, :created_at, :user_id

  belongs_to :user, serializer: UserReviewSerializer
  belongs_to :property, serializer: ReviewPropertySerializer
end
