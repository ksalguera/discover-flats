class SessionsController < ApplicationController
  skip_before_action :require_authentication, only: [:create]
  skip_before_action :authenticate_manager

  # POST /login
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: 'Incorrect username or password' }, status: :unauthorized
    end
  end
  
  # DELETE /logout
  def destroy
    session.delete :user_id
    head :no_content
  end

end
