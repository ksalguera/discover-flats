class ImageSerializer < ActiveModel::Serializer
  attributes :id, :image_url

  # removed belongs_to :property - only want id and image_url to display
end
