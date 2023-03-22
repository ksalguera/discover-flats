class FavoritesController < ApplicationController
  skip_before_action :authorize_managers

  # GET /favorites - by session user
  def index
    favorites = Favorite.where(user_id: session[:user_id])
    render json: favorites
  end

  # POST /favorites
  def create
    favorite = Favorite.create!(favorite_params)
    render json: favorite, status: :created
  end

  def destroy
    favorite = Favorite.find(params[:id])
    if favorite.user_id == session[:user_id]
      favorite.destroy
      head :no_content
    else
      head :unauthorized
    end
  end

  private

  def favorite_params
    params.permit(:user_id, :property_id)
  end

end
