class Review < ApplicationRecord
  belongs_to :property
  belongs_to :user

  validates :rating, { presence: true, inclusion: { in: 1..5, message: 'must be between 1 and 5' } }
  validates :description, { presence: true, length: { minimum: 20, maximum: 300 } }

  default_scope { order(created_at: :desc) }
end
