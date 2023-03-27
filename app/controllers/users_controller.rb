class UsersController < ApplicationController
  skip_before_action :require_authentication, only: [:create]
  skip_before_action :authenticate_manager
  
  def show
    render json: @current_user, include: { favorites: { include: :property } }
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user
  end

  private

  def user_params
    params.permit(:username, :greeting, :email, :password, :password_confirmation, :is_manager)
  end

end