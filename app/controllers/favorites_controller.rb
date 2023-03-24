class FavoritesController < ApplicationController
  skip_before_action :authenticate_manager

  def index
    favorites = Favorite.where(user_id: session[:user_id])
    render json: favorites
  end

  def create
    user = User.find(params[:user_id])
    if user.id === session[:user_id]
      favorite = Favorite.create!(favorite_params)
      render json: favorite, status: :created
    else 
      not_authenticated
    end
  end

  def destroy
    favorite = Favorite.find(params[:id])
    if favorite.user_id == session[:user_id]
      favorite.destroy
      head :no_content
    else
      not_authenticated
    end
  end

  private

  def favorite_params
    params.permit(:user_id, :property_id)
  end

end
