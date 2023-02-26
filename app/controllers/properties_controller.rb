class PropertiesController < ApplicationController
  skip_before_action :authorize, except: [:create, :update, :destroy]
  skip_before_action :authorize_managers, except: [:create, :update, :destroy]
  
  # GET /properties
  def index
    properties = Property.all
    render json: properties, methods: [:full_address]
  end

  # GET /properties/:id
  def show
    property = Property.find(params[:id])
    render json: property, methods: [:full_address]
  end
  
  # POST /properties
  def create
    property = Property.create!(property_params)
    property.user_id = session[:user_id]
    property.save!
    render json: property
  end

  def update
    property = Property.find(params[:id])
    property.update!(property_params)
    render json: property
  end

  def destroy
    Property.find(params[:id]).destroy
    head :no_content
  end

  # custom routes 

  # GET /affordable_properties
  def affordable
    properties = Property.where(affordability: 'affordable')
    render json: properties, methods: [:phone_number, :full_address]
  end

  # GET /midrange_properties
  def midrange
    properties = Property.where(affordability: 'midrange')
    render json: properties, methods: [:phone_number, :full_address]
  end

  # GET /luxury_properties
  def luxury
    properties = Property.where(affordability: 'luxury')
    render json: properties, methods: [:phone_number, :full_address]
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
