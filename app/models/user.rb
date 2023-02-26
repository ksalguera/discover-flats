class User < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :properties, through: :favorites
  has_many :owned_properties, class_name: "Property", foreign_key: "user_id", dependent: :destroy
  has_secure_password

  validates :username, { presence: true, uniqueness: true, length: { minimum: 4, maximum: 15} } 
  validates :greeting, { presence: true, length: { maximum: 15 } }
  validates :email, { presence: true, format: { with: URI::MailTo::EMAIL_REGEXP } }
end
