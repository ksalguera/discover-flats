class ImageSerializer < ActiveModel::Serializer
  attributes :id, :image_url

  #belongs_to :property

end
