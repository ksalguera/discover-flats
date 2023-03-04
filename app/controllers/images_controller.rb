class ImagesController < ApplicationController
  
  # POST /images
  def create
    image = Image.create!(image_params)
    render json: image
  end

  def destroy
    Image.find(params[:id]).destroy
    head :no_content
  end

  private

  def image_params
    params.permit(:image_url, :property_id)
  end
end
