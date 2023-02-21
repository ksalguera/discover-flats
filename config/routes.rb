Rails.application.routes.draw do
  resources :favorites, only: [:index, :create, :destroy]
  resources :properties
  
  # custom auth routes
  get '/profile', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # custom method routes
  get 'affordable_properties', to: 'properties#affordable'
  get 'midrange_properties', to: 'properties#midrange'
  get 'luxury_properties', to: 'properties#luxury'

  root 'properties#index'
end
