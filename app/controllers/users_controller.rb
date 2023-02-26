class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]
  skip_before_action :authorize_managers
  
  # GET /users/:id
  def show
    render json: @current_user
  end

  # POST /signup
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