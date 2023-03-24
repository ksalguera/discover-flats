class RatingsController < ApplicationController
  skip_before_action :authenticate_manager

  def index
    ratings = Rating.where(user_id: session[:user_id])
    render json: ratings
  end
  
  def create
    rating = Rating.create!(rating_params)
    if rating.user_id == session[:user_id]
      render json: rating, status: :created
    else 
      not_authenticated
    end
  end
  
  private

  def rating_params
    params.permit(:rating, :property_id, :user_id)
  end
end
