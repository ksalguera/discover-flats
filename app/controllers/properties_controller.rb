class PropertiesController < ApplicationController
  skip_before_action :require_authentication, except: [:create, :update, :destroy]
  skip_before_action :authenticate_manager, except: [:create, :update, :destroy]
  
  def index
    properties = Property.all
    render json: properties, methods: [:full_address, :average_review]
  end

  def show
    property = Property.find(params[:id])
    render json: property, methods: [:full_address, :average_review]
  end
  
  def create
    property = Property.create!(property_params)
    property.user_id = session[:user_id]
    property.save!
    render json: property, status: :created
  end

  def update
    property = Property.find(params[:id])
    if property.user_id == session[:user_id]
      property.update!(property_params)
      render json: property
    else
      not_authorized
    end
  end

  def destroy
    property = Property.find(params[:id])
    if property.user_id == session[:user_id]
      property.destroy
      head :no_content
    else
      not_authorized
    end
  end

  private

  def property_params
    params.permit(:name, :image_url, :website, :phone_number, 
      :address_line_one, :address_line_two, :city, :state, :zip, :pet_limit, 
      :dogs_allowed, :dog_restrictions, :dog_deposit, :dog_fee, 
      :cats_allowed, :cat_restrictions, :cat_deposit, :cat_fee, 
      :admin_fee, :application_fee, :affordability, :description
    )
  end
  
end
