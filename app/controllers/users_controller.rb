class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]
  
  # GET /users/:id
  def show
    render json: @current_user
  end

  # POST /signup
  def create
    user = User.create!(user_params)
    render json: user
  end

  private

  def user_params
    params.permit(:username, :greeting, :email, :password, :password_confirmation)
  end

end
