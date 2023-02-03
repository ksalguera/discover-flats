class PropertiesController < ApplicationController

  # GET /properties
  def index
    properties = Property.all
    render json: properties, methods: [:phone_number, :full_address]
  end
  
end
