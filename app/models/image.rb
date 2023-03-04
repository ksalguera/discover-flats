class Image < ApplicationRecord
  belongs_to :property
  
  validates :image_url, { presence: true, url: true }
end
