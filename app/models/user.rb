class User < ApplicationRecord
  has_secure_password
  validates :username, { presence: true, uniqueness: true, length: { minimum: 4, maximum: 15} } 
  validates :greeting, { presence: true, length: { maximum: 15 } }
  validates :email, { presence: true, format: { with: URI::MailTo::EMAIL_REGEXP } }

end
