class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize, :authorize_managers
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: 'Not Authorized' }, status: :unauthorized unless @current_user
  end

  def authorize_managers
    @current_manager_user = User.find_by(isManager: true)
    render json: { errors: 'Not Authorized' }, status: :unauthorized unless @current_manager_user
  end
  
  def render_not_found_response(error)
    render json: { errors: "#{error.model} Not Found" }, status: :not_found
  end
  
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
