class ReviewsController < ApplicationController
  skip_before_action :authenticate_manager

  def index
    reviews = Review.where(user_id: session[:user_id])
    render json: reviews
  end
  
  def create
    rating = Review.create!(review_params)
    if rating.user_id == session[:user_id]
      render json: rating, status: :created
    else 
      not_authenticated
    end
  end
  
  private

  def review_params
    params.permit(:rating, :description, :property_id, :user_id)
  end
end
