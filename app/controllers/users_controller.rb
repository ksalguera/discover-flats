class UsersController < ApplicationController

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
