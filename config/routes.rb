Rails.application.routes.draw do
  resources :properties
  
  get 'affordable_properties', to: 'properties#affordable'
  get 'midrange_properties', to: 'properties#midrange'
  get 'luxury_properties', to: 'properties#luxury'

  root 'properties#index'
end
