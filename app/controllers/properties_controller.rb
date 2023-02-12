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
  
end
