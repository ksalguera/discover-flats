class ImagesController < ApplicationController
  def create
    image = Image.create!(image_params)
    render json: image, status: :created
  end

  def destroy
    image = Image.find(params[:id])
    if image.property.user_id == session[:user_id]
      image.destroy
      head :no_content
    else
      head :unauthorized
    end
  end

  private

  def image_params
    params.permit(:image_url, :property_id)
  end
end
