class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :require_authentication, :authenticate_manager
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  private

  def not_authorized
    render json: { errors: ['Element Does Not Belong To User'] }, status: :unauthorized
  end

  def require_authentication
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: 'Access Denied' }, status: :unauthorized unless @current_user
  end

  def authenticate_manager
    @current_manager_user = User.find_by(is_manager: true)
    render json: { errors: 'Access Denied' }, status: :unauthorized unless @current_manager_user
  end
  
  def render_not_found_response(error)
    render json: { errors: "#{error.model} Not Found" }, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
