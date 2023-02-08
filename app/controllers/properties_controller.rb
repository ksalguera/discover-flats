class PropertiesController < ApplicationController

  # GET /properties
  def index
    properties = Property.all
    render json: properties, methods: [:phone_number, :full_address]
  end

  # GET /properties/:id
  def show
    property = Property.find(params[:id])
    render json: property, methods: [:phone_number, :full_address]
  end
  
end
