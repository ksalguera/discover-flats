class ImagesController < ApplicationController
  def create
    property = Property.find(params[:property_id])
    if property.user_id == session[:user_id]
      image = Image.create!(image_params)
      render json: image, status: :created
    else
      not_authorized
    end
  end

  def destroy
    image = Image.find(params[:id])
    if image.property.user_id == session[:user_id]
      image.destroy
      head :no_content
    else
      not_authorized
    end
  end

  private

  def image_params
    params.permit(:image_url, :property_id)
  end
end
